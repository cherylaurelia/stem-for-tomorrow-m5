"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, BookOpen, Instagram, Heart, Clock, Award, Globe, ExternalLink, Video, Quote } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function VolunteerPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{t("volunteer.title")}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">{t("volunteer.subtitle")}</p>
          <div className="w-24 h-1 bg-gradient-to-r from-stem-blue to-stem-yellow mx-auto"></div>
        </div>

        {/* Apply Button - Top of Page */}
        <section className="mb-16 text-center">
          <Button
            size="lg"
            asChild
            className="text-lg px-8 py-3 bg-gradient-to-br from-stem-blue to-stem-yellow hover:from-stem-blue/90 hover:to-stem-yellow/90 text-white"
          >
            <a
              href="https://forms.google.com/volunteer"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2"
            >
              <Users className="w-5 h-5" />
              <span>{t("volunteer.cta")}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </section>

        {/* Volunteer Testimonials */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{t("volunteer.testimonials.title")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 - Design Team */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Quote className="w-8 h-8 text-stem-blue mb-4" />
                <p className="text-gray-600 mb-6 italic">"{t("volunteer.testimonial1.quote")}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{t("volunteer.testimonial1.name")}</p>
                  <p className="text-sm text-stem-blue">{t("volunteer.testimonial1.role")}</p>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 2 - Research Team */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Quote className="w-8 h-8 text-stem-yellow mb-4" />
                <p className="text-gray-600 mb-6 italic">"{t("volunteer.testimonial2.quote")}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{t("volunteer.testimonial2.name")}</p>
                  <p className="text-sm text-stem-yellow">{t("volunteer.testimonial2.role")}</p>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 3 - Public Relations */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Quote className="w-8 h-8 text-stem-blue mb-4" />
                <p className="text-gray-600 mb-6 italic">"{t("volunteer.testimonial3.quote")}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{t("volunteer.testimonial3.name")}</p>
                  <p className="text-sm text-stem-blue">{t("volunteer.testimonial3.role")}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Volunteer Opportunities */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{t("volunteer.opportunities.title")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Design Team */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-stem-blue to-stem-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{t("volunteer.design.title")}</h3>
                <p className="text-gray-600 text-center">{t("volunteer.design.desc")}</p>
              </CardContent>
            </Card>

            {/* Research Team */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-stem-yellow to-stem-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{t("volunteer.research.title")}</h3>
                <p className="text-gray-600 text-center">{t("volunteer.research.desc")}</p>
              </CardContent>
            </Card>

            {/* Public Relations */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-stem-blue to-stem-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                  <Instagram className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{t("volunteer.pr.title")}</h3>
                <p className="text-gray-600 text-center">{t("volunteer.pr.desc")}</p>
              </CardContent>
            </Card>

            {/* Content Creation */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-stem-yellow to-stem-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <Video className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{t("volunteer.content.title")}</h3>
                <p className="text-gray-600 text-center">{t("volunteer.content.desc")}</p>
              </CardContent>
            </Card>

            {/* Teaching Support */}
            <Card className="hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-2">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-stem-blue to-stem-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{t("volunteer.teaching.title")}</h3>
                <p className="text-gray-600 text-center">{t("volunteer.teaching.desc")}</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Requirements */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{t("volunteer.requirements.title")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <Heart className="w-10 h-10 text-stem-blue mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">{t("volunteer.requirements.passion")}</h3>
                <p className="text-gray-600 text-sm">{t("volunteer.requirements.passion.desc")}</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Award className="w-10 h-10 text-stem-yellow mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">{t("volunteer.requirements.skills")}</h3>
                <p className="text-gray-600 text-sm">{t("volunteer.requirements.skills.desc")}</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Clock className="w-10 h-10 text-stem-blue mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">{t("volunteer.requirements.commitment")}</h3>
                <p className="text-gray-600 text-sm">{t("volunteer.requirements.commitment.desc")}</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Globe className="w-10 h-10 text-stem-yellow mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">{t("volunteer.requirements.language")}</h3>
                <p className="text-gray-600 text-sm">{t("volunteer.requirements.language.desc")}</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Additional Info */}
        <section className="mt-16 bg-gray-50 rounded-lg p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Growing Team</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our volunteers are the heart of STEM for Tomorrow. Whether you can contribute a few hours a week or more,
              your skills and passion can help us reach more children and create greater impact in STEM education.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
