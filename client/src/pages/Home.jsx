import React from 'react';
import { Helmet } from 'react-helmet-async';
import ServicesSlider from '../components/ServicesSlider';
import CatalogsSlider from '../components/CatalogsSlider';
import BlogsSlider from '../components/BlogsSlider';
import TestimonialsSlider from '../components/TestimonialsSlider';
import ClientsSlider from '../components/ClientsSlider';
import BannerSlider from '../components/BannerSlider';
import FAQ from '../components/FAQ';
import { FaCheckCircle, FaRocket, FaShieldAlt, FaUsers, FaPhoneAlt, FaAward, FaStar, FaChartLine, FaQuestionCircle } from 'react-icons/fa';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BlogSlider from '../components/BlogSlider';

const Home = () => {
  const faqs = [
    { q: 'What industries do you serve?', a: 'We work with startups, enterprises, healthcare, retail, finance, and more.' },
    { q: 'Can you build custom solutions?', a: 'Absolutely! We specialize in custom software, cloud, and AI solutions.' },
    { q: 'How do I get a quote?', a: 'Simply fill out our contact form and our team will reach out within 24 hours.' },
    { q: 'Do you offer ongoing support?', a: 'Yes, we provide 24/7 support and maintenance for all our clients.' },
    { q: 'Where are you located?', a: 'Our HQ is in New Delhi, India, but we serve clients globally.' },
  ];

  useEffect(() => { AOS.init({ once: true, duration: 800 }); }, []);

  // Founder data
  const founder = {
    name: 'Amit Sharma',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
    bio: 'Founder & CEO of Netcurion Technology. With 15+ years in tech, Amit leads with vision, integrity, and a passion for innovation. His mission: empower businesses to thrive in the digital era.',
    quote: '“At Netcurion, we believe technology should empower, not overwhelm. Our team is dedicated to making IT simple, secure, and scalable for every client.”',
  };

  const heroImage = 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80';
  const featureCards = [
    {
      title: 'Business Line of Credit',
      desc: 'Flexible credit lines to help your business grow and manage cash flow.',
      cta: 'Apply Now',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    },
    {
      title: 'Growth Analytics',
      desc: 'Real-time analytics and insights to empower your business decisions.',
      cta: 'Get Started',
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    },
  ];
  const features = [
    { icon: <FaRocket className="text-green-500 text-2xl" />, title: 'Fast Onboarding', desc: 'Get started in minutes with our seamless onboarding process.' },
    { icon: <FaShieldAlt className="text-green-500 text-2xl" />, title: 'Secure & Reliable', desc: 'Bank-level security and 99.99% uptime for your peace of mind.' },
    { icon: <FaUsers className="text-green-500 text-2xl" />, title: 'Dedicated Support', desc: 'Our team is here for you 24/7, every step of the way.' },
  ];
  const testimonials = [
    { name: 'Rahul Mehra', role: 'CTO, ShopEase', quote: 'Netcurion transformed our cloud infrastructure. Their team is responsive, skilled, and truly cares about our success.', avatar: 'https://randomuser.me/api/portraits/men/45.jpg', rating: 5 },
    { name: 'Priya Singh', role: 'CEO, MediCore', quote: 'Their AI solutions gave us a competitive edge. We saw results in weeks, not months!', avatar: 'https://randomuser.me/api/portraits/women/65.jpg', rating: 5 },
    { name: 'Carlos Gomez', role: 'Security Lead', quote: 'Security and support are top-notch. We trust Netcurion with our most critical systems.', avatar: 'https://randomuser.me/api/portraits/men/77.jpg', rating: 5 },
  ];
  const awards = [
    { icon: <FaAward className="text-3xl text-green-500" />, label: 'Best IT Startup 2022' },
    { icon: <FaAward className="text-3xl text-green-500" />, label: 'Top 10 Cloud Providers' },
    { icon: <FaAward className="text-3xl text-green-500" />, label: 'ISO 27001 Certified' },
  ];

  // Feature grid data
  const featureGrid = [
    { type: 'image', src: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80', alt: 'Team Chat', title: 'Built-in Team Chat', desc: 'Collaborate instantly within your team.' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80', alt: 'Teamwork', title: '', desc: '' },
    { type: 'card', title: 'Task Assignment', desc: 'Easily create, assign, and track tasks to keep everyone aligned and accountable.' },
    { type: 'card', title: 'Real-Time Scheduling', desc: 'Plan meetings and deadlines with ease using our smart, integrated calendar.' },
    { type: 'card', title: 'Progress Tracking', desc: 'Visualize team performance with dashboards that highlight what’s ahead and what’s next.', img: 'https://randomuser.me/api/portraits/women/44.jpg' },
  ];
  // About/Stats data
  const aboutStats = [
    { label: '3k+', value: 'Successful Projects' },
    { label: '200+', value: 'Expert Team' },
    { label: '350+', value: 'Happy Customers' },
    { label: '16+', value: 'Years of Experience' },
  ];
  const aboutProgress = [
    { label: 'Marketing & Business Growth', percent: 95 },
    { label: 'Creativity & Innovation', percent: 85 },
    { label: 'Success & Financial Management', percent: 90 },
  ];
  // Integrations data
  const integrations = [
    { icon: '/icons/slack.svg', alt: 'Slack' },
    { icon: '/icons/atlassian.svg', alt: 'Atlassian' },
    { icon: '/icons/zoom.svg', alt: 'Zoom' },
    { icon: '/icons/google-drive.svg', alt: 'Google Drive' },
    { icon: '/icons/dropbox.svg', alt: 'Dropbox' },
    { icon: '/icons/trello.svg', alt: 'Trello' },
    { icon: '/icons/github.svg', alt: 'GitHub' },
    { icon: '/icons/figma.svg', alt: 'Figma' },
  ];

  // Success section data
  const successBullets = [
    'Get Expert Financial Guidance',
    'Solutions for Your Business',
    'Advice for Business & Personal',
    'Transforming Businesses at Scale',
  ];
  const successImage = 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80';
  // Orange/yellow slider data
  const orangeSlider = [
    { title: 'Business Planning', desc: 'Strategic planning for sustainable growth.', icon: <FaRocket className="text-orange-400 text-3xl" /> },
    { title: 'Risk Management', desc: 'Protect your assets with expert risk analysis.', icon: <FaShieldAlt className="text-yellow-400 text-3xl" /> },
    { title: 'Tax Optimization', desc: 'Maximize returns with smart tax strategies.', icon: <FaChartLine className="text-orange-400 text-3xl" /> },
    { title: 'Personalized Support', desc: 'Dedicated advisors for your unique needs.', icon: <FaUsers className="text-yellow-400 text-3xl" /> },
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <Helmet>
        <title>Netcurion Technology | Home</title>
        <meta name="description" content="Netcurion Technology delivers innovative IT solutions for your business." />
      </Helmet>
      {/* Banner Slider */}
      <div data-aos="fade-up">
        <BannerSlider />
      </div>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
            Unlock Your <span className="text-green-500">Business</span> Potential with <span className="text-green-500">Netcurion</span>
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-200 max-w-xl">
            Financial freedom, cutting-edge features, and dedicated support for your business growth.
          </p>
          <div className="flex gap-4">
            <a href="#get-quote" className="px-6 py-3 rounded bg-green-500 text-white font-semibold shadow hover:bg-green-600 transition">Get Started</a>
          </div>
          <div className="flex gap-4 mt-4">
            <span className="flex items-center gap-2 text-gray-500 text-sm"><FaCheckCircle className="text-green-500" /> Trusted by 100+ businesses</span>
            <span className="flex items-center gap-2 text-gray-500 text-sm"><FaCheckCircle className="text-green-500" /> 24/7 Support</span>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="relative w-full max-w-md">
            <img src={heroImage} alt="Business Team" className="rounded-2xl shadow-2xl w-full object-cover" />
            <div className="absolute -bottom-6 -right-6 bg-green-500 text-white px-4 py-2 rounded-xl shadow-lg font-bold text-lg">100% Secure</div>
          </div>
        </div>
      </section>
      {/* Feature Cards Section */}
      <section className="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-2 gap-8">
        {featureCards.map((card, idx) => (
          <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-6 hover:shadow-2xl transition">
            <img src={card.image} alt={card.title} className="w-32 h-32 rounded-xl object-cover mb-4 md:mb-0" />
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{card.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{card.desc}</p>
              <a href="#get-quote" className="inline-block px-5 py-2 bg-green-500 text-white rounded-lg font-semibold shadow hover:bg-green-600 transition">{card.cta}</a>
            </div>
          </div>
        ))}
      </section>
      {/* Empower/Features Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Empower Your Business with Our Cutting-edge <span className="text-green-500">Features</span></h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center">
              {f.icon}
              <h4 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">{f.title}</h4>
              <p className="text-gray-600 dark:text-gray-300 mt-2">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Social Impact/Testimonials Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Our Positive <span className="text-green-500">Social Impact</span></h2>
        <div className="flex justify-center mb-6">
          <span className="flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold"><FaStar className="text-yellow-400" /> 4.9/5 on Trustpilot</span>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border-t-4 border-green-500">
              <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-full border-2 border-green-500 shadow-lg mb-4" />
              <p className="text-gray-700 dark:text-gray-200 italic mb-2">“{t.quote}”</p>
              <span className="font-semibold text-gray-900 dark:text-white">{t.name}</span>
              <span className="text-sm text-gray-500">{t.role}</span>
              <div className="flex gap-1 mt-2">
                {[...Array(t.rating)].map((_, i) => <FaStar key={i} className="text-yellow-400" />)}
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Awards & Recognition Section */}
      <section className="max-w-7xl mx-auto px-4 py-12 bg-gray-900 rounded-2xl flex flex-wrap justify-center items-center gap-8">
        {awards.map((a, idx) => (
          <div key={idx} className="flex flex-col items-center text-center text-white">
            {a.icon}
            <span className="mt-2 font-semibold">{a.label}</span>
          </div>
        ))}
      </section>
      {/* 1. Get a Free Quote Section (smaller images, balanced layout) */}
      <section id="get-quote" className="max-w-4xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 flex flex-col gap-4 items-center">
          <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=300&q=80" alt="Contact" className="rounded-xl shadow-lg w-40 h-40 object-cover" />
          <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=300&q=80" alt="Team" className="rounded-xl shadow-lg w-40 h-40 object-cover" />
        </div>
        <form className="flex-1 bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 flex flex-col gap-4 w-full max-w-md mx-auto" onSubmit={e => { e.preventDefault(); alert('Thank you! We will contact you soon.'); }}>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Get a Free Quote</h3>
          <label className="font-medium text-gray-700 dark:text-gray-200">Name</label>
          <input required className="mb-2 px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400" placeholder="Your Name" />
          <label className="font-medium text-gray-700 dark:text-gray-200">Email</label>
          <input type="email" required className="mb-2 px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400" placeholder="you@email.com" />
          <label className="font-medium text-gray-700 dark:text-gray-200">Message</label>
          <textarea required rows={4} className="mb-2 px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400" placeholder="Tell us about your project..."></textarea>
          <button type="submit" className="bg-green-500 text-white py-2 rounded font-semibold hover:bg-green-600 transition">Send Message</button>
        </form>
      </section>
      {/* Feature Grid Section */}
      <section className="max-w-7xl mx-auto px-4 py-16" data-aos="fade-up">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Everything Your Team Needs to Work Smarter</h2>
        <p className="text-gray-500 dark:text-gray-300 mb-12 text-center max-w-2xl mx-auto">From real-time tracking to instant live chat, our features are built to keep your team connected, organized, and moving forward—together.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:row-span-2 rounded-2xl overflow-hidden shadow-xl relative">
            <img src={featureGrid[0].src} alt={featureGrid[0].alt} className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 bg-black/60 text-white p-4 w-full">
              <h3 className="font-bold text-lg">{featureGrid[0].title}</h3>
              <p className="text-sm">{featureGrid[0].desc}</p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img src={featureGrid[1].src} alt={featureGrid[1].alt} className="w-full h-40 object-cover" />
          </div>
          <div className="rounded-2xl bg-gray-100 dark:bg-gray-800 shadow-xl p-6 flex flex-col justify-center">
            <h3 className="font-bold text-lg mb-2">{featureGrid[2].title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">{featureGrid[2].desc}</p>
          </div>
          <div className="rounded-2xl bg-gray-100 dark:bg-gray-800 shadow-xl p-6 flex flex-col justify-center">
            <h3 className="font-bold text-lg mb-2">{featureGrid[3].title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">{featureGrid[3].desc}</p>
          </div>
          <div className="rounded-2xl bg-white dark:bg-gray-900 shadow-xl p-6 flex flex-col items-center justify-center">
            <img src={featureGrid[4].img} alt="Progress Tracking" className="w-16 h-16 rounded-full mb-2 object-cover" />
            <h3 className="font-bold text-lg mb-2">{featureGrid[4].title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">{featureGrid[4].desc}</p>
          </div>
        </div>
      </section>
      {/* 1. Empowering Your Success with Digital Expertise (real content, modern layout) */}
      <section className="max-w-7xl mx-auto px-4 py-16 relative overflow-hidden" data-aos="fade-up">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 opacity-80 pointer-events-none" />
        <div className="relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center">Empowering Your Success with Digital Expertise</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-8 text-center max-w-2xl mx-auto">At Netcurion, we combine deep technical know-how with a passion for innovation. Our team delivers tailored solutions that help you grow, adapt, and lead in a digital world. From cloud to AI, we empower your business to reach new heights—securely and efficiently.</p>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col gap-4">
              {aboutProgress.map((prog, idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-1">
                    <span className="font-semibold text-gray-700 dark:text-gray-200 flex items-center gap-2"><FaCheckCircle className="text-green-500" />{prog.label}</span>
                    <span className="font-semibold text-green-500">{prog.percent}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700">
                    <div className="bg-gradient-to-r from-green-400 to-blue-400 h-3 rounded-full" style={{ width: `${prog.percent}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" alt="Team" className="rounded-2xl shadow-xl w-full object-cover" />
              <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80" alt="Office" className="rounded-2xl shadow-xl w-full object-cover" />
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-8 mt-10">
            {aboutStats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-xl shadow p-6 min-w-[120px]">
                <span className="text-3xl font-bold text-green-500">{stat.label}</span>
                <span className="text-gray-700 dark:text-gray-200 font-semibold">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Integrations Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-12" data-aos="fade-up">
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">Empowering Top Companies with Seamless Integrations</h2>
          <p className="text-gray-500 dark:text-gray-300 mb-6">Experience seamless connections with our innovative solutions, designed to effortlessly integrate with your existing systems, enhance productivity, and drive your business towards greater success.</p>
          <a href="#get-quote" className="inline-block px-6 py-3 bg-green-500 text-white rounded-lg font-semibold shadow hover:bg-green-600 transition">Work With Us</a>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className="bg-green-50 dark:bg-gray-800 rounded-2xl p-8 flex flex-wrap gap-6 justify-center items-center w-full max-w-md">
            {integrations.map((i, idx) => (
              <img key={idx} src={i.icon} alt={i.alt} className="w-12 h-12 object-contain" />
            ))}
          </div>
        </div>
      </section>
      {/* Committed to Your Success Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-12" data-aos="fade-up">
        <div className="flex-1 flex flex-col gap-4 items-center md:items-start">
          <img src={successImage} alt="Success" className="w-64 h-64 rounded-2xl object-cover shadow-xl mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">Empowering Your Success with Digital Expertise</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">At Netcurion, we deliver tailored solutions that help you grow, adapt, and lead in a digital world. From cloud to AI, we empower your business to reach new heights—securely and efficiently.</p>
          <ul className="grid grid-cols-1 gap-2 mb-6">
            {successBullets.map((b, idx) => (
              <li key={idx} className="flex items-center gap-2 text-gray-700 dark:text-gray-200"><span className="w-2 h-2 bg-green-400 rounded-full"></span>{b}</li>
            ))}
          </ul>
        </div>
        <div className="flex-1 flex flex-col gap-4 w-full">
          <div className="flex gap-4 w-full">
            <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" alt="Team" className="rounded-xl shadow w-1/2 object-cover" />
            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80" alt="Office" className="rounded-xl shadow w-1/2 object-cover" />
          </div>
        </div>
      </section>
      {/* Orange/Yellow Component Slider */}
      <section className="max-w-7xl mx-auto px-4 py-12" data-aos="fade-up">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">Our Expertise</h3>
          <div className="flex gap-2">
            {/* Add slider controls here if needed */}
          </div>
        </div>
        <div className="overflow-x-auto pb-2">
          <div className="flex gap-6 min-w-[600px]">
            {orangeSlider.map((item, idx) => (
              <div key={idx} className="min-w-[260px] bg-gradient-to-br from-orange-100 to-yellow-100 dark:from-orange-900 dark:to-yellow-900 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform">
                {item.icon}
                <h4 className="mt-4 text-lg font-bold text-orange-600 dark:text-yellow-300">{item.title}</h4>
                <p className="text-gray-700 dark:text-gray-200 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Blog Slider Section */}
      <section className="max-w-7xl mx-auto px-4 py-16" data-aos="fade-up">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Latest Insights from Our Blog</h2>
        <BlogSlider />
      </section>
      {/* 2. Testimonials Section (one card per slide, centered, avatar above, more whitespace) */}
      <section className="max-w-4xl mx-auto px-4 py-16" data-aos="fade-up">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">What Our Clients Say</h2>
        <div className="w-full">
          <TestimonialsSlider onePerSlide simpleCard />
        </div>
      </section>
      {/* 3. FAQ Section (simple, clean accordion) */}
      <section className="max-w-3xl mx-auto px-4 py-16" id="faq" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-indigo-700 dark:text-indigo-300 mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <details key={idx} className="bg-white dark:bg-gray-800 rounded-xl shadow p-4 group">
              <summary className="font-semibold text-gray-900 dark:text-white cursor-pointer flex items-center justify-between">
                {faq.q}
                <span className="ml-2 text-green-500 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-2 text-gray-600 dark:text-gray-300">{faq.a}</div>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
