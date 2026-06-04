import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About | Medical Imaging Capex Events Platform</title>
        <meta
          name="description"
          content="About the Medical Imaging Capex Events Platform — your comprehensive resource for tracking global medical imaging device exhibitions and capital expenditure opportunities."
        />
      </Head>

      {/* Header */}
      <div className="bg-gradient-to-br from-medical-800 to-medical-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">About the Platform</h1>
          <p className="text-xl text-medical-100 max-w-2xl mx-auto">
            Empowering healthcare procurement professionals with actionable intelligence on medical imaging events worldwide.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Mission */}
        <section id="mission" className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-medical-100 flex items-center justify-center text-xl">🎯</div>
            <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              The Medical Imaging Capex Events Platform was created to serve healthcare professionals, hospital procurement teams, and medical device companies who need comprehensive, up-to-date information about the global medical imaging conference landscape.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Capital expenditure decisions in medical imaging are complex and require insight into market trends, emerging technologies, and competitive landscapes. Our platform aggregates event data from leading conferences like RSNA, IRIA, Arab Health, ECR, and more — giving you the intelligence you need to plan strategically.
            </p>
          </div>
        </section>

        {/* What we track */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-xl">📊</div>
            <h2 className="text-2xl font-bold text-gray-900">What We Track</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: '🏥', title: 'Major Exhibitions', desc: 'World-class medical imaging exhibitions like RSNA, Arab Health, and ECR' },
              { icon: '🇮🇳', title: 'National Conferences', desc: 'Indian radiology events including IRIA annual conferences' },
              { icon: '💰', title: 'Capex Focus Areas', desc: 'MRI, CT, Ultrasound, AI Diagnostics, Nuclear Medicine, and more' },
              { icon: '📈', title: 'Industry Statistics', desc: 'Attendee counts, exhibitor numbers, and presentation volumes' },
              { icon: '🌍', title: 'Global Coverage', desc: 'Events from USA, Europe, Middle East, India and beyond' },
              { icon: '🔮', title: 'Future Events', desc: 'Upcoming conferences with dates, locations, and registration links' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="flex gap-4 bg-white rounded-xl border border-gray-100 shadow-sm p-5">
                <span className="text-2xl flex-shrink-0">{icon}</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
                  <p className="text-sm text-gray-600">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Events covered */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-xl">🗓️</div>
            <h2 className="text-2xl font-bold text-gray-900">Events Covered</h2>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="text-left px-6 py-3 font-semibold text-gray-700">Event</th>
                  <th className="text-left px-6 py-3 font-semibold text-gray-700">Location</th>
                  <th className="text-left px-6 py-3 font-semibold text-gray-700">Focus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { name: 'IRIA', loc: 'India', focus: 'Indian Radiology & Imaging' },
                  { name: 'RSNA', loc: 'Chicago, USA', focus: 'Global Radiology' },
                  { name: 'Arab Health', loc: 'Dubai, UAE', focus: 'MENA Healthcare' },
                  { name: 'ECR', loc: 'Vienna, Austria', focus: 'European Radiology' },
                  { name: 'MD&M West', loc: 'Anaheim, USA', focus: 'Medical Device Manufacturing' },
                ].map(({ name, loc, focus }) => (
                  <tr key={name} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-3 font-medium text-medical-700">{name}</td>
                    <td className="px-6 py-3 text-gray-600">{loc}</td>
                    <td className="px-6 py-3 text-gray-500">{focus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Contact */}
        <section id="contact">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-xl">📬</div>
            <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
          </div>
          <div className="bg-gradient-to-br from-medical-50 to-white rounded-2xl border border-medical-100 p-8">
            <p className="text-gray-700 mb-6 leading-relaxed">
              Have questions, event corrections, or want to add your medical imaging event to our platform? We'd love to hear from you.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📧</span>
                <div>
                  <p className="font-semibold text-gray-900 mb-0.5">Email</p>
                  <p className="text-sm text-gray-600">events@medicalimaging-capex.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🌐</span>
                <div>
                  <p className="font-semibold text-gray-900 mb-0.5">Website</p>
                  <p className="text-sm text-gray-600">medicalimaging-capex.com</p>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-medical-100">
              <Link href="/events" className="btn-primary">
                Browse All Events
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
