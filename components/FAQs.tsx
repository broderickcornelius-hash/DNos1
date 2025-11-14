import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'I have no remote work experience. Can NomadGate help me?',
    answer: 'Absolutely. We offer specialized resources, skill-building guides, and entry-level opportunity filters to help beginners land their first remote role and transition smoothly.',
  },
  {
    question: 'How do you verify the job listings and opportunities?',
    answer: 'Our team manually reviews each company and listing. We check for legitimacy, clear payment terms, and remote-first policies to ensure a safe and professional environment.',
  },
  {
    question: 'Is this platform suitable for digital nomads with families?',
    answer: 'Yes! We have dedicated filters and community groups for family travel, covering topics like schooling, healthcare, and family-friendly destinations and accommodations.',
  },
  {
    question: 'What makes NomadGate different from other remote job boards?',
    answer: 'We\'re not just a job board. We\'re an ecosystem. We combine opportunities with destination intelligence, financial tools, and a vibrant community to support your entire lifestyle, not just your job hunt.',
  },
];

export default function FAQs() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#fafafa]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-[#0f766e] mb-4">
          Your Questions, Answered
        </h2>

        <Accordion type="single" collapsible className="w-full mt-16 space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white border-2 rounded-2xl px-6 hover:border-[#0f766e] transition-colors duration-300"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-[#0f766e] py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
