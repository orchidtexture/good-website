import { HelpCircle } from 'lucide-react';
import { CustomJsonLd } from '../JsonLd';
import { SmartJapaneseText } from '../SmartJapaneseText';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
  className?: string;
}

/**
 * FAQSection Component
 * Self-injects FAQPage JSON-LD schema for Google Rich Results.
 * Minimalist design optimized for Agent-Developer Experience.
 */
export default function FAQSection({ 
  items, 
  title = "Frequently Asked Questions", 
  className = "py-20 bg-accent/5" 
}: FAQProps) {
  // Generate JSON-LD schema for the FAQs
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <section className={className}>
      <CustomJsonLd schema={faqSchema} />
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-black text-center mb-12 flex items-center justify-center gap-3 text-text-primary">
          <HelpCircle className="text-primary" size={32} />
          <SmartJapaneseText as="span">{title}</SmartJapaneseText>
        </h2>
        <div className="space-y-4">
          {items.map((item, i) => (
            <div key={i} className="bg-site-bg p-6 rounded-2xl shadow-sm border border-accent/10">
              <h3 className="font-black text-lg mb-3 flex gap-3 text-text-primary">
                <span className="text-primary shrink-0">Q.</span>
                <SmartJapaneseText as="span">{item.question}</SmartJapaneseText>
              </h3>
              <div className="flex gap-3 text-text-primary/70 leading-relaxed">
                <span className="font-bold text-accent shrink-0">A.</span>
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
