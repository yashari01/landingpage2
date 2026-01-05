import { ChevronDown } from 'lucide-react';
import { useState } from 'react';


export default function FAQ({...rest}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Is Opera GX really free?',
      answer: 'Yes, Opera GX is 100% free to download and use. All features, including the CPU/RAM/Network limiters, built-in VPN, ad blocker, and integrations are included at no cost. There are no hidden fees or premium tiers.',
    },
    {
      question: 'Will Opera GX make my games faster?',
      answer: 'Opera GX helps optimize your gaming performance by giving you control over CPU, RAM, and network bandwidth usage. By limiting browser resource consumption, more of your PC\'s power is available for your games, which can improve FPS and reduce lag.',
    },
    {
      question: 'How does the CPU/RAM limiter work?',
      answer: 'The limiters let you set a cap on how much of your system resources Opera GX can use. You can adjust these limits in real-time using simple sliders, ensuring your browser never takes resources away from your games when you need them most.',
    },
    {
      question: 'How does the free VPN work?',
      answer: 'Opera GX includes a built-in VPN that encrypts your connection and masks your IP address. Simply toggle it on in settings with one click. No signup, credit card, or data limits required. It\'s completely free and built right into the browser.',
    },
    {
      question: 'What data does Opera GX collect about me?',
      answer: 'Opera GX respects your privacy. The browser collects minimal anonymous usage data to improve features and performance. You have full control over privacy settings, and the built-in ad & tracker blocker prevents third-party tracking across the web.',
    },
    {
      question: 'Do I need an Opera account to use GX?',
      answer: 'No, you can use Opera GX without creating an account. However, creating a free account allows you to sync your bookmarks, settings, and preferences across devices if you want that convenience.',
    },
    {
      question: 'What are the system requirements?',
      answer: 'Opera GX runs on Windows 10/11 and macOS 10.15 or later. It\'s optimized to be lightweight and fast, requiring minimal system resources. If your PC can run games, it can definitely run Opera GX smoothly.',
    },
  ];

  return (
    <section  {...rest} className="relative py-16 bg-[#0d0d0f] h-full">
      {/* <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0f] to-[#1a0a0f]"></div> */}
      
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl mb-6 text-[#FA1E4E] font-bold">
            Frequently asked<br />questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-800 overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-800/50 transition-colors"
              >
                <h3 className="text-xl font-bold text-white pr-4">{faq.question}</h3>
                <ChevronDown
                  className={`w-6 h-6 text-[#ff375f] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
