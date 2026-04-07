'use client';

import { useState, useTransition } from 'react';
import { createClient } from '@/lib/supabase/client';
import { savePageContent } from '@/app/admin/actions/savePageContent';

// ─── Field schema — drives the editor UI ─────────────────────────────────────

type FieldType = 'text' | 'textarea' | 'image' | 'youtube';

interface FieldDef {
  key: string;
  label: string;
  type: FieldType;
  hint?: string;
  rows?: number;
}

interface SectionDef {
  title: string;
  fields: FieldDef[];
}

const HOMEPAGE_SCHEMA: SectionDef[] = [
  {
    title: 'Hero Section',
    fields: [
      { key: 'hero_heading_line1',      label: 'Heading Line 1',          type: 'text' },
      { key: 'hero_heading_highlight',  label: 'Heading Highlight Word',  type: 'text', hint: 'This word appears in the brand green colour.' },
      { key: 'hero_heading_line2',      label: 'Heading Line 2',          type: 'text' },
      { key: 'hero_subtext',            label: 'Hero Paragraph',          type: 'textarea', rows: 4 },
      { key: 'hero_badge_title',        label: 'Hero Badge Title',        type: 'text', hint: 'e.g. #1 Driving School' },
      { key: 'hero_badge_subtitle',     label: 'Hero Badge Subtitle',     type: 'text', hint: 'e.g. Brisbane & Gold Coast' },
      { key: 'hero_image_src',          label: 'Hero Image',              type: 'image' },
      { key: 'hero_video_id',           label: 'Hero Modal Video (YouTube ID)', type: 'youtube', hint: 'Enter the YouTube video ID only, e.g. Gmargl4hwNg — not the full URL.' },
    ],
  },
  {
    title: 'USP Cards',
    fields: [
      { key: 'usp_1_title', label: 'USP Card 1 — Title',  type: 'text' },
      { key: 'usp_1_body',  label: 'USP Card 1 — Body',   type: 'textarea', rows: 3 },
      { key: 'usp_2_title', label: 'USP Card 2 — Title',  type: 'text' },
      { key: 'usp_2_body',  label: 'USP Card 2 — Body',   type: 'textarea', rows: 3 },
      { key: 'usp_3_title', label: 'USP Card 3 — Title',  type: 'text' },
      { key: 'usp_3_body',  label: 'USP Card 3 — Body',   type: 'textarea', rows: 3 },
    ],
  },
  {
    title: 'Philosophy / About Section',
    fields: [
      { key: 'philosophy_heading',   label: 'Section Heading',   type: 'text' },
      { key: 'philosophy_body_1',    label: 'Paragraph 1',       type: 'textarea', rows: 4 },
      { key: 'philosophy_body_2',    label: 'Paragraph 2',       type: 'textarea', rows: 4 },
      { key: 'philosophy_image_src', label: 'Section Image',     type: 'image' },
    ],
  },
  {
    title: '"Why Choose Us" Section',
    fields: [
      { key: 'why_section_heading',   label: 'Section Heading',            type: 'text' },
      { key: 'why_section_body',      label: 'Section Paragraph',          type: 'textarea', rows: 3 },
      { key: 'why_section_video_id',  label: 'Embedded Video (YouTube ID)', type: 'youtube', hint: 'Enter the YouTube video ID only, e.g. AcHQLgvgftc' },
      { key: 'why_section_thumbnail', label: 'Video Thumbnail Image',      type: 'image' },
    ],
  },
];

const ABOUT_US_SCHEMA: SectionDef[] = [
  {
    title: 'Page Header',
    fields: [
      { key: 'page_header_title',    label: 'Page Title',    type: 'text' },
      { key: 'page_header_subtitle', label: 'Page Subtitle', type: 'textarea', rows: 2 },
    ],
  },
  {
    title: 'Intro Section',
    fields: [
      { key: 'intro_heading',  label: 'Intro Heading',   type: 'text' },
      { key: 'intro_body_1',   label: 'Paragraph 1',     type: 'textarea', rows: 4 },
      { key: 'intro_body_2',   label: 'Paragraph 2',     type: 'textarea', rows: 4 },
      { key: 'intro_image_src', label: 'Intro Image',    type: 'image' },
    ],
  },
  {
    title: 'Log Book Section',
    fields: [
      { key: 'logbook_highlight', label: 'Log Book Highlight (bold text)', type: 'textarea', rows: 2 },
      { key: 'logbook_body',      label: 'Log Book Body Text',             type: 'textarea', rows: 3 },
    ],
  },
  {
    title: 'Test Preparation Section',
    fields: [
      { key: 'test_prep_body',    label: 'Test Prep Body Text',  type: 'textarea', rows: 3 },
      { key: 'mock_test_heading', label: 'Mock Test Card Title', type: 'text' },
      { key: 'mock_test_body',    label: 'Mock Test Card Body',  type: 'textarea', rows: 2 },
    ],
  },
  {
    title: 'CTA Section',
    fields: [
      { key: 'commitment_heading', label: 'Commitment Heading', type: 'text' },
      { key: 'commitment_body',    label: 'Commitment Body',    type: 'textarea', rows: 3 },
      { key: 'cta_heading',        label: 'CTA Heading',        type: 'text' },
      { key: 'cta_body',           label: 'CTA Body',           type: 'textarea', rows: 2 },
    ],
  },
];

const PRICES_SCHEMA: SectionDef[] = [
  {
    title: 'Page Header',
    fields: [
      { key: 'page_header_title',    label: 'Page Title',    type: 'text' },
      { key: 'page_header_subtitle', label: 'Page Subtitle', type: 'text' },
      { key: 'intro_body',           label: 'Intro Paragraph', type: 'textarea', rows: 3 },
    ],
  },
  {
    title: 'Single Lessons',
    fields: [
      { key: 'spark_title',    label: 'Spark — Title',    type: 'text' },
      { key: 'spark_subtitle', label: 'Spark — Subtitle', type: 'text' },
      { key: 'spark_price',    label: 'Spark — Price',    type: 'text', hint: 'e.g. $75.00 / Hour' },
      { key: 'ignition_title',    label: 'Ignition — Title',    type: 'text' },
      { key: 'ignition_subtitle', label: 'Ignition — Subtitle', type: 'text' },
      { key: 'ignition_price',    label: 'Ignition — Price',    type: 'text' },
      { key: 'cruise_title',    label: 'Cruise — Title',    type: 'text' },
      { key: 'cruise_subtitle', label: 'Cruise — Subtitle', type: 'text' },
      { key: 'cruise_price',    label: 'Cruise — Price',    type: 'text' },
    ],
  },
  {
    title: 'Lesson Packages',
    fields: [
      { key: 'boost_title',    label: 'Boost — Title',    type: 'text' },
      { key: 'boost_subtitle', label: 'Boost — Subtitle', type: 'text' },
      { key: 'boost_price',    label: 'Boost — Price',    type: 'text' },
      { key: 'turbo_title',    label: 'Turbo — Title',    type: 'text' },
      { key: 'turbo_subtitle', label: 'Turbo — Subtitle', type: 'text' },
      { key: 'turbo_price',    label: 'Turbo — Price',    type: 'text' },
      { key: 'nitro_title',    label: 'Nitro — Title',    type: 'text' },
      { key: 'nitro_subtitle', label: 'Nitro — Subtitle', type: 'text' },
      { key: 'nitro_price',    label: 'Nitro — Price',    type: 'text' },
    ],
  },
  {
    title: 'Driving Test Plans',
    fields: [
      { key: 'lightning_title',    label: 'Lightning McQueen — Title',    type: 'text' },
      { key: 'lightning_subtitle', label: 'Lightning McQueen — Subtitle', type: 'text' },
      { key: 'lightning_price',    label: 'Lightning McQueen — Price',    type: 'text' },
      { key: 'fast_furious_title',    label: 'Fast & Furious — Title',    type: 'text' },
      { key: 'fast_furious_subtitle', label: 'Fast & Furious — Subtitle', type: 'text' },
      { key: 'fast_furious_price',    label: 'Fast & Furious — Price',    type: 'text' },
      { key: 'zoom_title',    label: 'Zoom Test — Title',    type: 'text' },
      { key: 'zoom_subtitle', label: 'Zoom Test — Subtitle', type: 'text' },
      { key: 'zoom_price',    label: 'Zoom Test — Price',    type: 'text' },
    ],
  },
  {
    title: 'Speciality Packages',
    fields: [
      { key: 'mock_test_title',    label: 'Mock Driving Test — Title',    type: 'text' },
      { key: 'mock_test_subtitle', label: 'Mock Driving Test — Subtitle', type: 'text' },
      { key: 'mock_test_price',    label: 'Mock Driving Test — Price',    type: 'text' },
      { key: 'night_rider_title',    label: 'Night Rider — Title',    type: 'text' },
      { key: 'night_rider_subtitle', label: 'Night Rider — Subtitle', type: 'text' },
      { key: 'night_rider_price',    label: 'Night Rider — Price',    type: 'text' },
      { key: 'gumball_title',    label: 'GUMBALL 3000 — Title',    type: 'text' },
      { key: 'gumball_subtitle', label: 'GUMBALL 3000 — Subtitle', type: 'text' },
      { key: 'gumball_price',    label: 'GUMBALL 3000 — Price',    type: 'text' },
    ],
  },
  {
    title: 'Referral & CTA Section',
    fields: [
      { key: 'referral_heading',     label: 'Referral Heading',      type: 'text' },
      { key: 'referral_body',        label: 'Referral Body',         type: 'textarea', rows: 2 },
      { key: 'gift_voucher_heading', label: 'Gift Voucher Heading',  type: 'text' },
      { key: 'gift_voucher_body',    label: 'Gift Voucher Body',      type: 'textarea', rows: 3 },
    ],
  },
];

const SCHEMAS: Record<string, SectionDef[]> = {
  homepage: HOMEPAGE_SCHEMA,
  'about-us': ABOUT_US_SCHEMA,
  prices: PRICES_SCHEMA,
};

// ─── Flatten nested price card objects to top-level for the form ──────────────
// PricesContent stores cards as { spark: { title, subtitle, price } }
// The schema uses flat keys like spark_title, spark_subtitle, spark_price
// This helper converts in both directions.

const CARD_KEYS = ['spark','ignition','cruise','boost','turbo','nitro','lightning','fast_furious','zoom','mock_test','night_rider','gumball'];

function flattenData(data: Record<string, unknown>): Record<string, string> {
  const out: Record<string, string> = {};
  for (const [k, v] of Object.entries(data)) {
    if (typeof v === 'object' && v !== null && 'title' in v) {
      // It's a card object — flatten
      const card = v as { title?: string; subtitle?: string; price?: string };
      out[`${k}_title`]    = card.title    ?? '';
      out[`${k}_subtitle`] = card.subtitle ?? '';
      out[`${k}_price`]    = card.price    ?? '';
    } else if (typeof v === 'string') {
      out[k] = v;
    }
  }
  return out;
}

function unflattenForPrices(flat: Record<string, string>): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(flat)) {
    let matched = false;
    for (const card of CARD_KEYS) {
      if (k === `${card}_title`)    { (out[card] as Record<string,string>) = { ...(out[card] as Record<string,string> ?? {}), title: v    }; matched = true; }
      if (k === `${card}_subtitle`) { (out[card] as Record<string,string>) = { ...(out[card] as Record<string,string> ?? {}), subtitle: v }; matched = true; }
      if (k === `${card}_price`)    { (out[card] as Record<string,string>) = { ...(out[card] as Record<string,string> ?? {}), price: v    }; matched = true; }
    }
    if (!matched) out[k] = v;
  }
  return out;
}

// ─── Props ────────────────────────────────────────────────────────────────────

interface PageContentFormProps {
  pageId: string;
  initialData: Record<string, unknown>;
  defaults: Record<string, unknown>;
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function PageContentForm({ pageId, initialData, defaults }: PageContentFormProps) {
  const schema = SCHEMAS[pageId] ?? [];
  const supabase = createClient();

  const [fields, setFields] = useState<Record<string, string>>(flattenData(initialData));
  const [status, setStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [uploadingKey, setUploadingKey] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const update = (key: string, value: string) =>
    setFields((prev) => ({ ...prev, [key]: value }));

  const handleSave = () => {
    setStatus('saving');
    const payload = pageId === 'prices' ? unflattenForPrices(fields) : { ...fields };
    startTransition(async () => {
      const res = await savePageContent(pageId, payload);
      if (res.ok) {
        setStatus('saved');
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('error');
        setErrorMsg(res.error ?? 'Unknown error');
      }
    });
  };

  const handleReset = () => {
    if (!confirm('Reset all fields on this page to their original defaults? Your saved changes will be overwritten.')) return;
    const flat = flattenData(defaults);
    setFields(flat);
  };

  const handleImageUpload = async (key: string, file: File) => {
    const ALLOWED = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
    if (!ALLOWED.includes(file.type)) { alert('Only JPEG, PNG, WebP, or GIF images are allowed.'); return; }
    if (file.size > 5 * 1024 * 1024) { alert('Image must be under 5MB.'); return; }

    setUploadingKey(key);
    const ext = file.name.split('.').pop();
    const name = `page-content/${Math.random().toString(36).substring(2)}_${Date.now()}.${ext}`;

    const { error } = await supabase.storage.from('blog-images').upload(name, file);
    if (error) { alert('Upload failed: ' + error.message); setUploadingKey(null); return; }

    const { data: { publicUrl } } = supabase.storage.from('blog-images').getPublicUrl(name);
    update(key, publicUrl);
    setUploadingKey(null);
  };

  return (
    <div className="max-w-4xl space-y-8 pb-24">

      {/* Sections */}
      {schema.map((section) => (
        <div key={section.title} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="bg-gray-50 border-b border-gray-200 px-6 py-3">
            <h2 className="text-sm font-bold text-gray-700 uppercase tracking-wider">{section.title}</h2>
          </div>
          <div className="p-6 space-y-5">
            {section.fields.map((field) => (
              <FieldEditor
                key={field.key}
                field={field}
                value={fields[field.key] ?? ''}
                onChange={(v) => update(field.key, v)}
                onUpload={(file) => handleImageUpload(field.key, file)}
                isUploading={uploadingKey === field.key}
              />
            ))}
          </div>
        </div>
      ))}

      {/* Sticky Save Bar */}
      <div className="fixed bottom-0 left-64 right-0 bg-white border-t border-gray-200 px-8 py-4 flex items-center justify-between z-50 shadow-lg">
        <div className="flex items-center gap-3">
          {status === 'saved' && (
            <span className="text-sm text-green-600 font-semibold flex items-center gap-1">
              <span>✓</span> Changes saved and published
            </span>
          )}
          {status === 'error' && (
            <span className="text-sm text-red-600 font-semibold">Error: {errorMsg}</span>
          )}
          {status === 'idle' && (
            <span className="text-sm text-gray-400">Unsaved changes will be lost if you navigate away.</span>
          )}
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleReset}
            className="px-4 py-2 rounded-lg text-sm font-medium border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Reset to Defaults
          </button>
          <button
            type="button"
            onClick={handleSave}
            disabled={status === 'saving' || isPending}
            className="px-6 py-2 rounded-lg text-sm font-semibold bg-primary text-white hover:bg-green-600 transition-colors disabled:opacity-60"
          >
            {status === 'saving' || isPending ? 'Saving…' : 'Save Changes'}
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Field Editor Sub-Component ───────────────────────────────────────────────

interface FieldEditorProps {
  field: FieldDef;
  value: string;
  onChange: (v: string) => void;
  onUpload: (file: File) => void;
  isUploading: boolean;
}

function FieldEditor({ field, value, onChange, onUpload, isUploading }: FieldEditorProps) {
  const base = 'w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors bg-white';

  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-1.5">{field.label}</label>

      {field.type === 'text' && (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={base}
        />
      )}

      {field.type === 'textarea' && (
        <textarea
          rows={field.rows ?? 3}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`${base} resize-y`}
        />
      )}

      {field.type === 'youtube' && (
        <div className="space-y-2">
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="e.g. AcHQLgvgftc"
            className={base}
          />
          {value && (
            <div className="relative aspect-video w-full max-w-sm rounded-lg overflow-hidden border border-gray-200 bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${value}`}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="YouTube preview"
              />
            </div>
          )}
        </div>
      )}

      {field.type === 'image' && (
        <div className="space-y-3">
          {/* Current image preview */}
          {value && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={value}
              alt="Current"
              className="h-32 w-auto max-w-xs rounded-lg border border-gray-200 object-cover"
            />
          )}
          {/* URL input */}
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Paste image URL or upload below"
            className={base}
          />
          {/* File upload */}
          <div className="flex items-center gap-3">
            <label className="cursor-pointer inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-300 bg-white text-sm text-gray-700 hover:bg-gray-50 transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {isUploading ? 'Uploading…' : 'Upload Image'}
              <input
                type="file"
                accept="image/*"
                className="sr-only"
                disabled={isUploading}
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) onUpload(file);
                  e.target.value = '';
                }}
              />
            </label>
            {isUploading && (
              <span className="text-xs text-gray-500 animate-pulse">Uploading image…</span>
            )}
          </div>
        </div>
      )}

      {field.hint && (
        <p className="mt-1.5 text-xs text-gray-400">{field.hint}</p>
      )}
    </div>
  );
}
