"use client";

import { useRef, useEffect } from 'react';
import * as THREE from 'three';

const vertexShader = /* glsl */ `
varying vec2 v_texcoord;
void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    v_texcoord = uv;
}
`;

const fragmentShader = /* glsl */ `
varying vec2 v_texcoord;

uniform vec2 u_mouse;
uniform vec2 u_resolution;
uniform float u_pixelRatio;

// Shape Settings
uniform float u_shapeSize;
uniform float u_borderSize;
uniform float u_circleSize;
uniform float u_circleEdge;
uniform vec3 u_color;
uniform float u_opacity; // New uniform for translucency

vec2 coord(in vec2 p) {
    p = p / u_resolution.xy;
    if (u_resolution.x > u_resolution.y) {
        p.x *= u_resolution.x / u_resolution.y;
        p.x += (u_resolution.y - u_resolution.x) / u_resolution.y / 2.0;
    } else {
        p.y *= u_resolution.y / u_resolution.x;
        p.y += (u_resolution.x - u_resolution.y) / u_resolution.x / 2.0;
    }
    p -= 0.5;
    p *= vec2(-1.0, 1.0);
    return p;
}

#define st0 coord(gl_FragCoord.xy)
#define mx coord(u_mouse * u_pixelRatio)

float sdCircle(in vec2 st, in vec2 center) {
    return length(st - center) * 2.0;
}

// INFINITY SHAPE MATH
float sdInfinity(vec2 p, float s) {
    p *= 2.0; 
    p.x /= s; 
    float x2 = p.x * p.x;
    float y2 = p.y * p.y;
    float sumSq = x2 + y2;
    float diffSq = x2 - y2;
    float val = (sumSq * sumSq) - 2.0 * (diffSq);
    return val * 0.5; 
}

float fill(in float x) { return 1.0 - step(0.0, x); }
float fill(float x, float size, float edge) {
    return 1.0 - smoothstep(size - edge, size + edge, x);
}

float strokeInside(float x, float w, float edge) {
    float d = smoothstep(w + edge, w, abs(x));
    return clamp(d, 0.0, 1.0);
}

void main() {
    vec2 st = st0 + 0.5;
    vec2 posMouse = mx * vec2(1., -1.) + 0.5;
    
    // Mouse Interaction
    float sdfCircle = fill(
        sdCircle(st, posMouse),
        u_circleSize,
        u_circleEdge
    );

    // Shape
    float sdf = sdInfinity(st - 0.5, u_shapeSize);
    
    // Calculate shape alpha based on blur
    float shapeAlpha = strokeInside(sdf, u_borderSize, sdfCircle * 0.5);

    // Combine Color + Shape Alpha + Global Opacity
    gl_FragColor = vec4(u_color, shapeAlpha * u_opacity);
}
`;

interface ShapeBlurProps {
    className?: string;
    pixelRatioProp?: number;
    shapeSize?: number;
    borderSize?: number;
    circleSize?: number;
    circleEdge?: number;
    color?: string;
    opacity?: number;
}

const ShapeBlur = ({
    className = '',
    pixelRatioProp = 2,
    shapeSize = 1.3,
    borderSize = 0.12,
    circleSize = 0.4,
    circleEdge = 1.0,
    color = '#FFFFFF', // Default: White
    opacity = 0.5      // Default: 50% Translucent
}: ShapeBlurProps) => {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const mount = mountRef.current;
        if (!mount) return;

        let animationFrameId: number;
        let time = 0, lastTime = 0;

        const vMouse = new THREE.Vector2();
        const vMouseDamp = new THREE.Vector2();
        const vResolution = new THREE.Vector2();
        const vColor = new THREE.Color(color);

        let w = 1, h = 1;

        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera();
        camera.position.z = 1;

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setClearColor(0x000000, 0); // Clear background
        mount.appendChild(renderer.domElement);

        const geo = new THREE.PlaneGeometry(1, 1);
        const material = new THREE.ShaderMaterial({
            vertexShader,
            fragmentShader,
            uniforms: {
                u_mouse: { value: vMouseDamp },
                u_resolution: { value: vResolution },
                u_pixelRatio: { value: pixelRatioProp },
                u_shapeSize: { value: shapeSize },
                u_borderSize: { value: borderSize },
                u_circleSize: { value: circleSize },
                u_circleEdge: { value: circleEdge },
                u_color: { value: vColor },
                u_opacity: { value: opacity }
            },
            transparent: true,
            depthTest: false // Improves transparency rendering
        });

        const quad = new THREE.Mesh(geo, material);
        scene.add(quad);

        const onPointerMove = (e: MouseEvent | PointerEvent) => {
            const rect = mount.getBoundingClientRect();
            vMouse.set(e.clientX - rect.left, e.clientY - rect.top);
        };

        document.addEventListener('mousemove', onPointerMove);
        document.addEventListener('pointermove', onPointerMove);

        const resize = () => {
            if (!mountRef.current) return;
            const container = mountRef.current;
            w = container.clientWidth;
            h = container.clientHeight;
            const dpr = Math.min(window.devicePixelRatio, 2);

            renderer.setSize(w, h);
            renderer.setPixelRatio(dpr);

            camera.left = -w / 2;
            camera.right = w / 2;
            camera.top = h / 2;
            camera.bottom = -h / 2;
            camera.updateProjectionMatrix();

            quad.scale.set(w, h, 1);
            vResolution.set(w, h).multiplyScalar(dpr);
            material.uniforms.u_pixelRatio.value = dpr;
        };

        resize();
        window.addEventListener('resize', resize);

        const ro = new ResizeObserver(() => resize());
        if (mountRef.current) ro.observe(mountRef.current);

        const update = () => {
            time = performance.now() * 0.001;
            const dt = time - lastTime;
            lastTime = time;

            ['x', 'y'].forEach(k => {
                // @ts-ignore
                vMouseDamp[k] = THREE.MathUtils.damp(vMouseDamp[k], vMouse[k], 8, dt);
            });

            renderer.render(scene, camera);
            animationFrameId = requestAnimationFrame(update);
        };
        update();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', resize);
            if (ro) ro.disconnect();
            document.removeEventListener('mousemove', onPointerMove);
            document.removeEventListener('pointermove', onPointerMove);
            if (mount && mount.contains(renderer.domElement)) {
                mount.removeChild(renderer.domElement);
            }
            renderer.dispose();
            material.dispose();
            geo.dispose();
        };
    }, [pixelRatioProp, shapeSize, borderSize, circleSize, circleEdge, color, opacity]);

    return <div className={className} ref={mountRef} style={{ width: '100%', height: '100%' }} />;
};

export default ShapeBlur;
