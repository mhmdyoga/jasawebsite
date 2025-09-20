import React from 'react'
import { Button } from './button'
import { Code, Globe, Phone } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
  const redirectToWhatsApp = () => {
  const phoneNumber = "6281234567890"; // ganti dengan nomor WA lo (format internasional tanpa +)
  const message = encodeURIComponent(
    "Halo, saya sepertinya tertarik dengan portofolio dan kinerja dari Jasawebsite.dev, bisa konsultasi untuk kebutuhan business saya ?"
  );
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
};

const redirectToPortofolio = () => {
  window.open('https://mhmdyoga.vercel.app/projects')
}
  return (
    <div>
          {/* CTA Section */}
        <div className="glass-morphism rounded-3xl p-12 mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Siap Wujudkan <span className='underline underline-offset-4 decoration-[#4f2cce]'>Website Impian</span> Anda?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Konsultasi gratis untuk mengetahui solusi terbaik bagi bisnis Anda. Mari berkolaborasi menciptakan digital
            experience yang luar biasa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={redirectToWhatsApp}
              className="glass-card bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-2xl hover:scale-105 transition-all duration-300"
            >
              <Phone className="w-5 h-5 mr-2" />
              Konsultasi Gratis
            </Button>
            <Button
              size="lg"
              onClick={redirectToPortofolio}
              variant="secondary"
              className="glass-card text-white border-primary/30 hover:bg-primary/10 px-8 py-6 text-lg font-semibold rounded-2xl hover:scale-105 transition-all duration-300 bg-transparent"
            >
              <Globe className="w-5 h-5 mr-2" />
              Lihat Portfolio
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="glass-morphism rounded-2xl p-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="glass-card rounded-full p-2">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm text-muted-foreground">© 2025 Jasawebsite.dev, The Web Development Service #1 di indonesia.</span>
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <Link href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer