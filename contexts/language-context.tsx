"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "id"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.work": "Our Work",
    "nav.involved": "Get Involved",
    "nav.contact": "Contact",
    "nav.donate": "Donate",
    "nav.volunteer": "Volunteer",

    // Home Page
    "home.hero.title": "Empowering Tomorrow Through STEM Education",
    "home.hero.subtitle":
      "We create educational STEM content and teach underprivileged children math and English through our partnership with Indonesian philanthropic organizations.",
    "home.hero.cta": "Join Our Mission",
    "home.impact.title": "Our Impact",
    "home.impact.followers": "1,000+ Instagram Followers",
    "home.impact.raised": "1M+ IDR Raised in Fundraisers",
    "home.impact.partnership": "Partnership with Payon Citi",
    "home.mission.title": "Our Mission",
    "home.mission.text":
      "To provide quality STEM education to underprivileged children and inspire the next generation of innovators and problem solvers.",

    // About Page
    "about.title": "About STEM for Tomorrow",
    "about.mission.title": "Our Mission",
    "about.mission.text":
      "Our mission is to empower the next generation by making STEM education accessible and engaging through sharing cutting-edge research and scientific discoveries.",
    "about.vision.title": "Our Vision",
    "about.vision.text":
      "Our vision is to inspire like-minded individuals to immerse themselves in the complex yet mind-opening journey of science, technology, engineering and mathematics.",
    "about.values.title": "Our Values",
    "about.values.education": "Quality Education",
    "about.values.education.text": "We believe in providing high-quality, engaging educational content.",
    "about.values.accessibility": "Accessibility",
    "about.values.accessibility.text":
      "Education should be accessible to all children, regardless of their circumstances.",
    "about.values.community": "Community",
    "about.values.community.text": "We work together with local organizations to create lasting impact.",

    // Our Work Page
    "work.title": "Our Work",
    "work.content.title": "Educational Content Creation",
    "work.content.text":
      "We create engaging STEM content for our Instagram community of over 1,000 followers, making complex concepts accessible and fun for young learners.",
    "work.teaching.title": "Direct Teaching Support",
    "work.teaching.text":
      "Through our partnership with Payon Citi, we provide direct math and English instruction to underprivileged children across Indonesia.",
    "work.fundraising.title": "Community Fundraising",
    "work.fundraising.text":
      "We have successfully raised over 1 million IDR through fundraisers to support our educational programs and reach more children in need.",

    // Get Involved Page
    "involved.title": "Get Involved",
    "involved.subtitle": "Join us in making a difference in children's lives through STEM education",
    "involved.donate.title": "Donate",
    "involved.donate.text": "Your donation helps us create more educational content and support more children.",
    "involved.donate.cta": "Donate Now",
    "involved.volunteer.title": "Volunteer",
    "involved.volunteer.text": "Share your skills and passion for education by volunteering with us.",
    "involved.volunteer.cta": "Become a Volunteer",
    "involved.follow.title": "Follow Us",
    "involved.follow.text": "Stay updated with our latest content and impact stories on Instagram.",
    "involved.follow.cta": "Follow on Instagram",

    // Contact Page
    "contact.title": "Contact Us",
    "contact.subtitle": "Get in touch with us to learn more about our work or discuss partnership opportunities.",
    "contact.email": "Email",
    "contact.social": "Social Media",
    "contact.partnership": "Partnership Inquiries",
    "contact.partnership.text": "Interested in partnering with us? Please email us to discuss opportunities.",
    // Donate Page
    "donate.title": "Support Our Mission",
    "donate.subtitle": "Your donation directly impacts children's lives through quality STEM education",
    "donate.impact.title": "Your Impact",
    "donate.impact.25": "$25 USD / 375,000 IDR",
    "donate.impact.25.desc": "Provides educational materials for 5 children for one month",
    "donate.impact.50": "$50 USD / 750,000 IDR",
    "donate.impact.50.desc": "Sponsors a complete STEM workshop for 10 children",
    "donate.impact.100": "$100 USD / 1,500,000 IDR",
    "donate.impact.100.desc": "Funds a month of direct teaching for 20 children",
    "donate.impact.custom": "Custom Amount",
    "donate.impact.custom.desc": "Every contribution makes a difference",
    "donate.why.title": "Why Your Donation Matters",
    "donate.why.direct": "Direct Impact",
    "donate.why.direct.desc": "100% of donations go directly to educational programs",
    "donate.why.transparent": "Full Transparency",
    "donate.why.transparent.desc": "Regular updates on how your donation is used",
    "donate.why.partnership": "Trusted Partnership",
    "donate.why.partnership.desc": "Working with established organizations like Payon Citi",
    "donate.cta": "Donate Now",

    // Volunteer Page
    "volunteer.title": "Volunteer With Us",
    "volunteer.subtitle": "Share your passion for education and make a lasting impact on children's lives",
    "volunteer.opportunities.title": "Volunteer Opportunities",
    "volunteer.design.title": "Design Team",
    "volunteer.design.desc": "Create visually appealing graphics and layouts for our educational posts",
    "volunteer.research.title": "Research Team",
    "volunteer.research.desc": "Research cutting-edge scientific discoveries and help create educational content",
    "volunteer.pr.title": "Public Relations",
    "volunteer.pr.desc": "Manage our Instagram account and engage with our growing community",
    "volunteer.content.title": "Content Creation",
    "volunteer.content.desc": "Create engaging Instagram reels to promote our organization and STEM education",
    "volunteer.teaching.title": "Teaching Support",
    "volunteer.teaching.desc":
      "Help create lesson materials or teach children directly (Indonesian fluency required for direct teaching)",
    "volunteer.requirements.title": "What We're Looking For",
    "volunteer.requirements.passion": "Passion for Education",
    "volunteer.requirements.passion.desc": "Genuine interest in helping children learn and grow",
    "volunteer.requirements.skills": "Relevant Skills",
    "volunteer.requirements.skills.desc": "Background in STEM, education, or content creation",
    "volunteer.requirements.commitment": "Time Commitment",
    "volunteer.requirements.commitment.desc": "Ability to contribute 2-4 hours per week consistently",
    "volunteer.requirements.language": "Language Skills",
    "volunteer.requirements.language.desc": "Fluency in English, Bahasa Indonesia, or both",
    "volunteer.cta": "Apply to Volunteer",
    "volunteer.testimonials.title": "What Our Volunteers Say",
    "volunteer.testimonial1.quote":
      "Being part of STEM for Tomorrow has been incredibly rewarding. I love creating designs that make complex scientific concepts accessible to young minds. Seeing our posts engage thousands of followers motivates me every day.",
    "volunteer.testimonial1.name": "Sarah Chen",
    "volunteer.testimonial1.role": "Design Team Volunteer",
    "volunteer.testimonial2.quote":
      "Researching cutting-edge scientific discoveries and turning them into educational content has expanded my own knowledge while helping children learn. The team is supportive and the mission is truly inspiring.",
    "volunteer.testimonial2.name": "Ahmad Rizki",
    "volunteer.testimonial2.role": "Research Team Volunteer",
    "volunteer.testimonial3.quote":
      "Managing our Instagram and engaging with our community has been such a fulfilling experience. I get to interact with parents, students, and educators who are all passionate about STEM education.",
    "volunteer.testimonial3.name": "Maria Santos",
    "volunteer.testimonial3.role": "Public Relations Volunteer",

    // Footer
    "footer.mission": "Empowering underprivileged children through quality STEM education.",
    "footer.rights": "All rights reserved.",
  },
  id: {
    // Navigation
    "nav.home": "Beranda",
    "nav.about": "Tentang Kami",
    "nav.work": "Karya Kami",
    "nav.involved": "Bergabung",
    "nav.contact": "Kontak",
    "nav.donate": "Donasi",
    "nav.volunteer": "Relawan",

    // Home Page
    "home.hero.title": "Memberdayakan Masa Depan Melalui Pendidikan STEM",
    "home.hero.subtitle":
      "Kami membuat konten edukasi STEM dan mengajar anak-anak kurang mampu matematika dan bahasa Inggris melalui kemitraan dengan organisasi filantropi Indonesia.",
    "home.hero.cta": "Bergabung dengan Misi Kami",
    "home.impact.title": "Dampak Kami",
    "home.impact.followers": "1,000+ Pengikut Instagram",
    "home.impact.raised": "1M+ IDR Terkumpul melalui Penggalangan Dana",
    "home.impact.partnership": "Kemitraan dengan Payon Citi",
    "home.mission.title": "Misi Kami",
    "home.mission.text":
      "Menyediakan pendidikan STEM berkualitas untuk anak-anak kurang mampu dan menginspirasi generasi penerus inovator dan pemecah masalah.",

    // About Page
    "about.title": "Tentang STEM for Tomorrow",
    "about.mission.title": "Misi Kami",
    "about.mission.text":
      "Misi kami adalah memberdayakan generasi penerus dengan membuat pendidikan STEM dapat diakses dan menarik melalui berbagi penelitian terdepan dan penemuan ilmiah.",
    "about.vision.title": "Visi Kami",
    "about.vision.text":
      "Visi kami adalah menginspirasi individu yang berpikiran sama untuk membenamkan diri dalam perjalanan sains, teknologi, teknik, dan matematika yang kompleks namun membuka pikiran.",
    "about.values.title": "Nilai-Nilai Kami",
    "about.values.education": "Pendidikan Berkualitas",
    "about.values.education.text": "Kami percaya dalam menyediakan konten edukasi berkualitas tinggi dan menarik.",
    "about.values.accessibility": "Aksesibilitas",
    "about.values.accessibility.text": "Pendidikan harus dapat diakses oleh semua anak, terlepas dari keadaan mereka.",
    "about.values.community": "Komunitas",
    "about.values.community.text":
      "Kami bekerja sama dengan organisasi lokal untuk menciptakan dampak yang berkelanjutan.",

    // Our Work Page
    "work.title": "Karya Kami",
    "work.content.title": "Pembuatan Konten Edukasi",
    "work.content.text":
      "Kami membuat konten STEM yang menarik untuk komunitas Instagram kami yang berjumlah lebih dari 1,000 pengikut, membuat konsep kompleks menjadi mudah diakses dan menyenangkan bagi pelajar muda.",
    "work.teaching.title": "Dukungan Pengajaran Langsung",
    "work.teaching.text":
      "Melalui kemitraan dengan Payon Citi, kami menyediakan instruksi matematika dan bahasa Inggris langsung kepada anak-anak kurang mampu di seluruh Indonesia.",
    "work.fundraising.title": "Penggalangan Dana Komunitas",
    "work.fundraising.text":
      "Kami telah berhasil mengumpulkan lebih dari 1 juta IDR melalui penggalangan dana untuk mendukung program pendidikan kami dan menjangkau lebih banyak anak yang membutuhkan.",

    // Get Involved Page
    "involved.title": "Bergabung",
    "involved.subtitle":
      "Bergabunglah dengan kami dalam membuat perbedaan dalam kehidupan anak-anak melalui pendidikan STEM",
    "involved.donate.title": "Donasi",
    "involved.donate.text":
      "Donasi Anda membantu kami membuat lebih banyak konten edukasi dan mendukung lebih banyak anak.",
    "involved.donate.cta": "Donasi Sekarang",
    "involved.volunteer.title": "Relawan",
    "involved.volunteer.text":
      "Bagikan keterampilan dan passion Anda untuk pendidikan dengan menjadi relawan bersama kami.",
    "involved.volunteer.cta": "Menjadi Relawan",
    "involved.follow.title": "Ikuti Kami",
    "involved.follow.text": "Tetap update dengan konten terbaru dan cerita dampak kami di Instagram.",
    "involved.follow.cta": "Ikuti di Instagram",

    // Contact Page
    "contact.title": "Hubungi Kami",
    "contact.subtitle":
      "Hubungi kami untuk mempelajari lebih lanjut tentang karya kami atau mendiskusikan peluang kemitraan.",
    "contact.email": "Email",
    "contact.social": "Media Sosial",
    "contact.partnership": "Pertanyaan Kemitraan",
    "contact.partnership.text": "Tertarik bermitra dengan kami? Silakan email kami untuk mendiskusikan peluang.",

    // Donate Page
    "donate.title": "Dukung Misi Kami",
    "donate.subtitle": "Donasi Anda langsung berdampak pada kehidupan anak-anak melalui pendidikan STEM berkualitas",
    "donate.impact.title": "Dampak Anda",
    "donate.impact.25": "$25 USD / 375,000 IDR",
    "donate.impact.25.desc": "Menyediakan materi edukasi untuk 5 anak selama satu bulan",
    "donate.impact.50": "$50 USD / 750,000 IDR",
    "donate.impact.50.desc": "Mensponsori workshop STEM lengkap untuk 10 anak",
    "donate.impact.100": "$100 USD / 1,500,000 IDR",
    "donate.impact.100.desc": "Mendanai pengajaran langsung selama sebulan untuk 20 anak",
    "donate.impact.custom": "Jumlah Kustom",
    "donate.impact.custom.desc": "Setiap kontribusi membuat perbedaan",
    "donate.why.title": "Mengapa Donasi Anda Penting",
    "donate.why.direct": "Dampak Langsung",
    "donate.why.direct.desc": "100% donasi langsung untuk program pendidikan",
    "donate.why.transparent": "Transparansi Penuh",
    "donate.why.transparent.desc": "Update rutin tentang penggunaan donasi Anda",
    "donate.why.partnership": "Kemitraan Terpercaya",
    "donate.why.partnership.desc": "Bekerja sama dengan organisasi mapan seperti Payon Citi",
    "donate.cta": "Donasi Sekarang",

    // Volunteer Page
    "volunteer.title": "Menjadi Relawan",
    "volunteer.subtitle":
      "Bagikan passion Anda untuk pendidikan dan buat dampak berkelanjutan pada kehidupan anak-anak",
    "volunteer.opportunities.title": "Peluang Relawan",
    "volunteer.design.title": "Tim Desain",
    "volunteer.design.desc": "Membuat grafis dan tata letak yang menarik secara visual untuk postingan edukasi kami",
    "volunteer.research.title": "Tim Riset",
    "volunteer.research.desc": "Meneliti penemuan ilmiah terdepan dan membantu membuat konten edukasi",
    "volunteer.pr.title": "Hubungan Masyarakat",
    "volunteer.pr.desc": "Mengelola akun Instagram kami dan berinteraksi dengan komunitas yang berkembang",
    "volunteer.content.title": "Pembuatan Konten",
    "volunteer.content.desc":
      "Membuat reels Instagram yang menarik untuk mempromosikan organisasi dan pendidikan STEM kami",
    "volunteer.teaching.title": "Dukungan Pengajaran",
    "volunteer.teaching.desc":
      "Membantu membuat materi pelajaran atau mengajar anak-anak secara langsung (kemampuan bahasa Indonesia diperlukan untuk pengajaran langsung)",
    "volunteer.requirements.title": "Yang Kami Cari",
    "volunteer.requirements.passion": "Passion untuk Pendidikan",
    "volunteer.requirements.passion.desc": "Minat tulus untuk membantu anak-anak belajar dan berkembang",
    "volunteer.requirements.skills": "Keterampilan Relevan",
    "volunteer.requirements.skills.desc": "Latar belakang di STEM, pendidikan, atau pembuatan konten",
    "volunteer.requirements.commitment": "Komitmen Waktu",
    "volunteer.requirements.commitment.desc": "Kemampuan berkontribusi 2-4 jam per minggu secara konsisten",
    "volunteer.requirements.language": "Kemampuan Bahasa",
    "volunteer.requirements.language.desc": "Fasih berbahasa Inggris, Bahasa Indonesia, atau keduanya",
    "volunteer.cta": "Daftar Menjadi Relawan",
    "volunteer.testimonials.title": "Kata Para Relawan Kami",
    "volunteer.testimonial1.quote":
      "Menjadi bagian dari STEM for Tomorrow sangat memuaskan. Saya senang membuat desain yang membuat konsep ilmiah kompleks dapat diakses oleh pikiran muda. Melihat postingan kami melibatkan ribuan pengikut memotivasi saya setiap hari.",
    "volunteer.testimonial1.name": "Sarah Chen",
    "volunteer.testimonial1.role": "Relawan Tim Desain",
    "volunteer.testimonial2.quote":
      "Meneliti penemuan ilmiah terdepan dan mengubahnya menjadi konten edukasi telah memperluas pengetahuan saya sendiri sambil membantu anak-anak belajar. Tim sangat mendukung dan misinya benar-benar menginspirasi.",
    "volunteer.testimonial2.name": "Ahmad Rizki",
    "volunteer.testimonial2.role": "Relawan Tim Riset",
    "volunteer.testimonial3.quote":
      "Mengelola Instagram kami dan berinteraksi dengan komunitas kami telah menjadi pengalaman yang sangat memuaskan. Saya bisa berinteraksi dengan orang tua, siswa, dan pendidik yang semuanya bersemangat tentang pendidikan STEM.",
    "volunteer.testimonial3.name": "Maria Santos",
    "volunteer.testimonial3.role": "Relawan Hubungan Masyarakat",

    // Footer
    "footer.mission": "Memberdayakan anak-anak kurang mampu melalui pendidikan STEM berkualitas.",
    "footer.rights": "Semua hak dilindungi.",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)["en"]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
