'use client';

import Image from 'next/image';
import Link from 'next/link'; // Import Link
import { useState, useEffect, useCallback, type ReactElement } from 'react';
import { Button } from '@/components/ui/button';
// Card components removed as they're not used directly in this component
import { Separator } from '@/components/ui/separator';
import { ValuationGrowthChart } from '@/components/charts/valuation-growth-chart';
import { RevenueProjectionChart } from '@/components/charts/revenue-projection-chart';
import { PeerComparisonChart } from '@/components/charts/peer-comparison-chart';
// Removed: import { ApplicationWizard } from "@/components/application-form/application-wizard"
import {
  TrendingUp,
  Target,
  DollarSign,
  Zap,
  ShieldAlert,
  Lightbulb,
  UsersRound,
  Rocket,
  Landmark,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  BarChart3,
} from 'lucide-react';

// TypeScript interfaces for better type safety
interface Visual {
  title: string;
  component: ReactElement;
  explanation: string;
}

interface Stat {
  label: string;
  value: string;
}

interface MajorHolder {
  name: string;
  logo?: string | null;
  entry: string;
  stake: string;
  bgColor?: string;
  stakeColor?: string;
  entryColor?: string;
}

interface Section {
  id: string;
  icon?: ReactElement;
  title?: string;
  content?: string;
  visuals?: Visual[];
  points?: string[];
  stats?: Stat[];
  majorHolders?: MajorHolder[];
  footerNote?: string;
  benefits?: string[];
}

// Type definitions complete - ready for component

export default function DigitalBrochurePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showCookieNotice, setShowCookieNotice] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (!cookiesAccepted) {
      setShowCookieNotice(true);
    }
  }, []);

  const acceptCookies = useCallback(() => {
    localStorage.setItem('cookiesAccepted', 'true');
    setShowCookieNotice(false);
  }, []);

  const sections: Section[] = [
    {
      id: 'opportunity',
      icon: <Lightbulb className='mb-4 h-10 w-10 text-primary' />,
      title: 'Investment Thesis: The Revolut Opportunity',
      content:
        "Revolut represents a once-in-a-generation investment opportunity in the financial technology sector. With revolutionary products spanning digital banking, payments, crypto, and investment services, the company has achieved unprecedented scale and market penetration, establishing itself as Europe's leading fintech platform with global expansion.",
      points: [
        'Market-leading fintech platform with comprehensive financial services ecosystem',
        'Exponential customer growth: Over 45 million customers across 38+ countries',
        'Strategic expansion into new markets including US, Japan, and emerging economies',
        'Experienced leadership team with proven track record in scaling global fintech platforms',
      ],
    },
    {
      id: 'growth',
      icon: <TrendingUp className='mb-4 h-10 w-10 text-primary' />,
      title: 'Financial Performance: Exceptional Growth Trajectory',
      content:
        "Revolut's financial metrics demonstrate extraordinary growth, with revenue scaling from $1.17B in 2022 to $4.27B in 2024 TTM. The company has filed for IPO and maintains a current market cap of $81.66B via Notice platform pricing, reflecting strong investor confidence and market validation.",
      visuals: [
        {
          title: 'Valuation Growth Analysis',
          component: <ValuationGrowthChart />,
          explanation:
            "Revolut's valuation trajectory shows consistent growth, reaching $33B in the latest funding round with a market cap premium of +147%. This growth demonstrates sustained investor confidence and market validation of the company's fintech leadership position.",
        },
        {
          title: 'Revenue Projections & Monetization',
          component: <RevenueProjectionChart />,
          explanation:
            'Revenue growth from $1.17B (2022) to $4.27B (2024 TTM) represents exceptional 75%+ YoY growth, driven by global expansion, new product launches, and increasing customer engagement across financial services.',
        },
      ],
      stats: [
        { label: 'Current Market Cap', value: '$81.66 Billion' },
        { label: 'Total Capital Raised', value: '$1.70 Billion' },
        { label: '2024 TTM Revenue', value: '$4.27 Billion' },
        { label: 'Customer Base', value: '45+ Million' },
      ],
    },
    {
      id: 'market-leadership',
      icon: <Target className='mb-4 h-10 w-10 text-primary' />,
      title: 'Market Position: Dominant Fintech Platform Leader',
      content:
        "Revolut maintains a commanding lead in the fintech sector, with a market capitalization that significantly exceeds traditional financial services companies. The company's technological superiority in digital banking, comprehensive financial ecosystem, and first-mover advantages in multiple markets create sustainable competitive moats.",
      visuals: [
        {
          title: 'Competitive Landscape Analysis',
          component: <PeerComparisonChart />,
          explanation:
            "Revolut's $81.66B market cap positions it competitively against industry leaders in fintech and traditional banking, demonstrating strong market positioning and investor confidence in the company's comprehensive financial platform.",
        },
      ],
      points: [
        'Leading position in the rapidly growing fintech market',
        'Comprehensive financial ecosystem with 45+ million customers globally',
        'Continuous innovation pipeline with new products and market expansion',
        'Strong partnerships with major financial institutions and payment networks',
      ],
    },
    {
      id: 'investors',
      icon: <UsersRound className='mb-4 h-10 w-10 text-primary' />,
      title: 'Institutional Backing: World-Class Investor Portfolio',
      content:
        "Revolut's investor base includes the world's most sophisticated technology and financial institutions. With $1.70 billion in total funding, the company has attracted backing from Tiger Global, Index Ventures, DST, Ribbit Capital, and other premier investment firms, providing both capital and strategic value.",
      majorHolders: [
        {
          name: 'Tiger Global',
          logo: '/logos/tiger-global-logo.avif',
          entry: 'Lead investor in Series E $800M round',
          stake: 'Significant growth investor',
          bgColor: 'bg-white',
        },
        {
          name: 'Index Ventures',
          logo: '/logos/index-ventures-logo.png',
          entry: 'Early investor and Series E participant',
          stake: 'Major institutional holder',
          bgColor: 'bg-white',
        },
        {
          name: 'DST Global',
          logo: '/logos/dst-logo.svg',
          entry: 'Series D and Series E co-investor',
          stake: 'Significant growth investor',
          bgColor: 'bg-gray-100',
        },
        {
          name: 'Ribbit Capital',
          logo: '/logos/ribbit-capital-logo.png',
          entry: 'Early fintech specialist investor',
          stake: 'Fintech expertise backing',
          bgColor: 'bg-gray-100',
        },
        {
          name: 'SoftBank Vision Fund 2',
          logo: '/logos/softbank-logo.png',
          entry: 'Series E co-lead investor',
          stake: 'Major institutional backing',
          bgColor: 'bg-white',
        },
        {
          name: 'Additional Strategic Investors',
          logo: null,
          entry:
            'Includes Balderton Capital, TCV, Seedcamp, Point Nine Capital',
          stake: 'Combined institutional backing',
        },
      ],
      footerNote:
        '*Ownership percentages are estimates based on disclosed funding rounds and may change following IPO. Source: Public filings and press releases. Trading via Notice platform.',
    },
    {
      id: 'ipo-path',
      icon: <Landmark className='mb-4 h-10 w-10 text-primary' />,
      title: 'IPO Filed: Path to Public Markets',
      content:
        'Revolut has officially filed for IPO with plans to list on NASDAQ under ticker symbol REVU. The company has demonstrated exceptional financial performance and global scale, with $42.7B in revenue and 45+ million customers, positioning it for a successful public debut.',
      points: [
        'IPO filed for NASDAQ listing under ticker symbol REVU',
        'Exceptional 2024 performance with $42.7B revenue demonstrates market readiness',
        'Global customer base of 45+ million users across 38+ countries',
        'Strong competitive position in high-growth fintech and digital banking sectors',
      ],
    },
    {
      id: 'why-invest',
      icon: <DollarSign className='mb-4 h-10 w-10 text-primary' />,
      title: 'Investment Rationale: Compelling Value Proposition',
      content:
        'Pre-IPO investment in Revolut via Notice platform offers accredited investors exposure to the defining fintech company of the digital banking era. With limited liquidity events in the fintech sector, this opportunity provides early access to a market leader before public market availability.',
      benefits: [
        'Exceptional growth potential in the rapidly expanding fintech and digital banking market',
        'Pre-IPO pricing advantage with current stock price of $1,376.28 via Notice platform',
        'Portfolio diversification into transformative fintech and financial technology',
        'Limited availability - exclusive access for qualified accredited investors via Notice',
      ],
    },
  ];

  const orderedSections = [
    sections.find((s) => s.id === 'opportunity'),
    sections.find((s) => s.id === 'growth'),
    sections.find((s) => s.id === 'market-leadership'),
    sections.find((s) => s.id === 'investors'),
    sections.find((s) => s.id === 'ipo-path'),
    sections.find((s) => s.id === 'why-invest'),
  ].filter(Boolean);

  return (
    <div className='min-h-screen bg-white font-sans text-base leading-relaxed text-gray-700'>
      <header className='fixed left-0 right-0 top-0 z-50 border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur-xl'>
        <div className='mx-auto max-w-7xl'>
          {/* Top notification bar - Mobile optimized */}
          <div className='border-b border-gray-200 bg-blue-50 px-2 py-1 text-center sm:px-4 sm:py-2'>
            <p className='text-xs text-gray-800'>
              <span className='mr-1 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-blue-600 sm:mr-2 sm:h-2 sm:w-2'></span>
              <strong className='text-gray-900'>Live Opportunity</strong>
              <span className='hidden sm:inline'>
                {' '}
                - Limited allocation available for 2025
              </span>
              <span className='ml-1 text-blue-700 sm:ml-2'>
                <span className='hidden sm:inline'>• Minimum: $10K AUD • </span>
                Close: 2025
              </span>
            </p>
          </div>

          {/* Main navigation - Mobile optimized */}
          <div className='flex items-center justify-between px-3 py-2 sm:px-4 sm:py-4 md:px-8'>
            {/* Enhanced Brand Identity with Trust Badges - Mobile optimized */}
            <div className='flex items-center space-x-2 sm:space-x-4'>
              <div className='revolut-icon-container'>
                <Image
                  src='/revolut-icon.svg'
                  alt='Revolut Icon'
                  width={40}
                  height={32}
                  className='revolut-icon-image rounded-lg object-contain shadow-sm sm:h-10 md:h-10'
                  style={{ width: 'auto', maxWidth: '120px' }}
                  priority
                />
              </div>
              {/* Trust Badges */}
              <div className='flex space-x-2'>
                <div className='flex items-center rounded-full border border-green-200 bg-green-100 px-3 py-1 text-sm font-medium text-green-700'>
                  <ShieldAlert className='mr-1 h-3 w-3' />
                  <span className='hidden sm:inline'>Notice </span>Platform
                </div>
                <div className='flex items-center rounded-full border border-blue-200 bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700'>
                  <Landmark className='mr-1 h-3 w-3' />
                  <span className='hidden sm:inline'>Secondary </span>Market
                </div>
              </div>
            </div>

            {/* Simplified Navigation Menu */}
            <nav className='hidden space-x-1 lg:flex'>
              {[
                { id: 'growth', label: 'Overview', icon: BarChart3 },
                { id: 'investors', label: 'Investors', icon: UsersRound },
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className='group relative flex items-center space-x-2 rounded-lg px-4 py-3 text-sm font-medium text-gray-600 transition-all duration-300 hover:bg-gray-100 hover:text-gray-900'
                >
                  <item.icon className='h-4 w-4' />
                  <span>{item.label}</span>
                  <div className='absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-blue-600 transition-all duration-300 group-hover:w-3/4'></div>
                </a>
              ))}
            </nav>

            {/* Clean CTA Section - Mobile optimized */}
            <div className='flex items-center space-x-2 sm:space-x-3'>
              {/* Enhanced Primary CTA */}
              <Link
                href='/apply'
                className='group relative overflow-hidden rounded-lg bg-blue-600 px-6 py-3 text-xs font-semibold text-white shadow-sm transition-all transition-colors duration-300 hover:scale-105 hover:bg-blue-700 sm:rounded-xl sm:text-sm md:px-8 md:py-3 md:text-base'
              >
                <div className='absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100'></div>
                <div className='relative flex items-center space-x-1 sm:space-x-2'>
                  <span className='sm:hidden'>Apply</span>
                  <span className='hidden sm:inline'>Apply Now</span>
                  <Rocket className='h-3 w-3 transition-transform group-hover:translate-x-1 sm:h-4 sm:w-4' />
                </div>
              </Link>

              {/* Mobile Menu Toggle */}
              <Button
                variant='ghost'
                size='sm'
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className='h-12 w-12 text-gray-600 hover:bg-gray-100 hover:text-gray-900 lg:hidden'
              >
                {isMenuOpen ? (
                  <X className='h-5 w-5' />
                ) : (
                  <Menu className='h-5 w-5' />
                )}
              </Button>
            </div>
          </div>

          {/* Enhanced Mobile Menu - Compact */}
          {isMenuOpen && (
            <div className='border-t border-gray-200 bg-white/95 backdrop-blur-xl lg:hidden'>
              <div className='px-3 py-3'>
                {/* Mobile Trust Indicators - Compact */}
                <div className='mb-3 flex justify-center space-x-3 text-xs'>
                  <div className='flex items-center space-x-1 text-green-600'>
                    <ShieldAlert className='h-2.5 w-2.5' />
                    <span>ASIC</span>
                  </div>
                  <div className='flex items-center space-x-1 text-blue-600'>
                    <Landmark className='h-2.5 w-2.5' />
                    <span>Australia</span>
                  </div>
                </div>

                {/* Mobile Navigation - Compact */}
                <nav className='space-y-2'>
                  {[
                    {
                      id: 'growth',
                      label: 'Overview',
                      icon: BarChart3,
                      desc: '$300B Valuation',
                    },
                    {
                      id: 'investors',
                      label: 'Investors',
                      icon: UsersRound,
                      desc: 'Microsoft, SoftBank+',
                    },
                  ].map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className='flex min-h-[56px] items-center space-x-3 rounded-lg bg-gray-100 p-4 transition-all hover:bg-gray-200'
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600'>
                        <item.icon className='h-4 w-4 text-white' />
                      </div>
                      <div className='flex-1'>
                        <p className='text-sm font-medium text-gray-900'>
                          {item.label}
                        </p>
                        <p className='text-xs text-gray-500'>{item.desc}</p>
                      </div>
                    </a>
                  ))}
                </nav>

                {/* Mobile Contact - Compact */}
                <div className='mt-3 rounded-lg bg-gray-100 p-3 text-center'>
                  <p className='mb-1 text-xs font-medium text-gray-900'>
                    Support
                  </p>
                  <a
                    href='tel:+61385779534'
                    className='block flex min-h-[44px] items-center justify-center py-2 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700'
                  >
                    +61 3 8577 9534
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      <div className='relative overflow-hidden bg-gradient-to-b from-gray-50 to-white pt-20 sm:pt-24 md:pt-28'>
        {/* Subtle professional background pattern */}
        <div className='bg-grid-pattern pointer-events-none absolute inset-0 opacity-5'></div>

        <section className='relative z-10 px-4 py-8 text-center sm:py-12 md:px-8 md:py-20 lg:py-32'>
          <div className='mx-auto max-w-6xl'>
            {/* Professional Trust Indicators - Mobile optimized */}
            <div className='mb-4 flex flex-wrap items-center justify-center gap-1.5 sm:mb-6 sm:gap-3 md:mb-10 md:gap-6'>
              <div className='flex items-center rounded-full border border-green-200 bg-green-100 px-3 py-1 text-sm font-medium text-green-700'>
                <ShieldAlert className='mr-1 h-3 w-3 sm:mr-2 sm:h-4 sm:w-4' />
                <span className='text-xs font-medium sm:text-sm'>
                  <span className='sm:hidden'>Notice</span>
                  <span className='hidden sm:inline'>Notice Platform</span>
                </span>
              </div>
              <div className='flex items-center rounded-full border border-blue-200 bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700'>
                <UsersRound className='mr-1 h-3 w-3 sm:mr-2 sm:h-4 sm:w-4' />
                <span className='text-xs font-medium sm:text-sm'>
                  <span className='sm:hidden'>Accredited</span>
                  <span className='hidden sm:inline'>
                    Accredited Investors Only
                  </span>
                </span>
              </div>
              <div className='flex items-center rounded-full border border-blue-200 bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700'>
                <Zap className='mr-1 h-3 w-3 sm:mr-2 sm:h-4 sm:w-4' />
                <span className='text-xs font-medium sm:text-sm'>
                  <span className='sm:hidden'>Limited</span>
                  <span className='hidden sm:inline'>Limited Availability</span>
                </span>
              </div>
            </div>

            {/* Revolut Logo - Mobile optimized */}
            <div className='mb-4 flex justify-center sm:mb-6 md:mb-8'>
              <div className='revolut-logo-hero-container'>
                <Image
                  src='/revolut-logo.png'
                  alt='Revolut Logo'
                  width={200}
                  height={80}
                  className='revolut-logo-image object-contain sm:h-24 sm:w-auto md:h-32 md:w-auto'
                  style={{
                    filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))',
                  }}
                  priority
                />
              </div>
            </div>

            {/* Enhanced Value Proposition Badge - Mobile optimized */}
            <div className='mb-4 inline-block rounded-xl border border-gray-200 bg-white p-0.5 shadow-lg sm:mb-6 sm:rounded-2xl sm:p-1 md:mb-8'>
              <div className='rounded-lg bg-blue-50 px-2.5 py-1.5 sm:rounded-xl sm:px-6 sm:py-3'>
                <p className='text-sm font-bold text-blue-700 sm:text-base'>
                  <span className='sm:hidden'>
                    ● Revolut Pre-IPO • $1,376.28
                  </span>
                  <span className='hidden sm:inline'>
                    ● Exclusive Pre-IPO Investment Opportunity • $1,376.28 Stock
                    Price
                  </span>
                </p>
              </div>
            </div>

            {/* Main Headline with Enhanced Typography - Mobile optimized */}
            <h1 className='mb-4 text-5xl font-bold leading-tight text-gray-900 sm:mb-6 sm:text-6xl md:mb-8 md:text-7xl lg:text-8xl'>
              <span className='sm:hidden'>Invest in Fintech</span>
              <span className='hidden sm:inline'>Invest in the </span>
              <span className='relative text-blue-600'>
                <span className='sm:hidden'>Revolution</span>
                <span className='hidden sm:inline'>
                  Future of Financial Technology
                </span>
                <div className='absolute -bottom-1 left-0 h-0.5 w-full bg-blue-600 opacity-60 sm:-bottom-2 sm:h-1'></div>
              </span>
            </h1>

            {/* Enhanced Description - Mobile optimized */}
            <p className='mx-auto mb-6 max-w-2xl text-xl leading-relaxed text-gray-700 sm:mb-8 sm:max-w-3xl sm:text-2xl md:mb-10 md:text-3xl lg:text-4xl'>
              <span className='sm:hidden'>
                Join global institutions in Revolut&apos;s pre-IPO via Notice.{' '}
                <strong className='text-gray-900'>$81.66B market cap</strong>{' '}
                with <strong className='text-blue-600'>$4.27B revenue</strong>.
              </span>
              <span className='hidden sm:inline'>
                Join global institutions investing in Revolut before its
                anticipated IPO via Notice platform.
                <br className='hidden md:inline' />
                <strong className='text-gray-900'>
                  {' '}
                  $81.66B market cap
                </strong>{' '}
                with
                <strong className='text-blue-600'>
                  {' '}
                  $4.27B annual revenue
                </strong>
                .
              </span>
            </p>

            {/* Enhanced Key Metrics with Animation - Mobile optimized */}
            <div className='mb-6 grid grid-cols-3 gap-2 sm:mb-8 sm:gap-4 md:mb-12 md:gap-6'>
              {[
                {
                  value: '$1,376.28',
                  label: 'Stock Price',
                  color: 'text-blue-600',
                  delay: 'delay-0',
                },
                {
                  value: '$1.70B',
                  label: 'Total Funding Raised',
                  color: 'text-gray-700',
                  delay: 'delay-100',
                },
                {
                  value: 'Filed',
                  label: 'IPO Status',
                  color: 'text-green-600',
                  delay: 'delay-200',
                },
              ].map((metric, index) => (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-2.5 shadow-sm transition-all duration-200 hover:border-gray-300 hover:shadow-md sm:p-4 md:p-6 ${metric.delay}`}
                >
                  <div className='absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100'></div>
                  <div className='relative text-center'>
                    <div
                      className={`text-base font-bold sm:text-2xl md:text-3xl lg:text-4xl ${metric.color}`}
                    >
                      {metric.value}
                    </div>
                    <div className='mt-0.5 text-xs font-medium text-gray-500 sm:mt-2 sm:text-sm'>
                      <span className='sm:hidden'>
                        {metric.label.split(' ')[0]}
                      </span>
                      <span className='hidden sm:inline'>{metric.label}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced CTA Section with Professional Layout */}
            <div className='flex flex-col items-center space-y-6 sm:flex-row sm:justify-center sm:space-x-6 sm:space-y-0'>
              {/* Primary CTA */}
              <Button
                asChild
                size='lg'
                className='group relative min-h-[48px] w-full overflow-hidden rounded-2xl bg-blue-600 px-6 py-4 text-lg font-semibold text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-blue-700 sm:w-auto md:px-12 md:py-6 md:text-xl'
              >
                <Link href='/apply'>
                  <div className='absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100'></div>
                  <div className='relative flex items-center space-x-3'>
                    <span>Start Investment Application</span>
                    <Rocket className='h-5 w-5 transition-transform group-hover:translate-x-1 md:h-6 md:w-6' />
                  </div>
                </Link>
              </Button>

              {/* Secondary CTA */}
              <Button
                variant='outline'
                size='lg'
                className='group min-h-[48px] w-full rounded-lg border border-gray-300 bg-white px-6 py-4 text-lg font-semibold text-gray-700 transition-all hover:border-gray-400 hover:bg-gray-50 hover:text-gray-900 sm:w-auto md:px-12 md:py-6 md:text-xl'
                onClick={() => {
                  const investorsSection = document.getElementById('investors');
                  investorsSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <div className='flex items-center space-x-3'>
                  <span>View Investor Backing</span>
                  <UsersRound className='h-5 w-5 transition-transform group-hover:scale-110 md:h-6 md:w-6' />
                </div>
              </Button>
            </div>

            {/* Professional Risk Disclaimer */}
            <div className='mt-12 rounded-xl border border-orange-200 bg-orange-50 p-6'>
              <p className='text-sm leading-relaxed text-gray-800'>
                <strong className='text-orange-700'>
                  Investment Disclaimer:
                </strong>{' '}
                This investment involves substantial risk, including potential
                total loss of principal. Past performance does not guarantee
                future results.
                <br className='hidden sm:inline' />
                For wholesale clients only. Please read full disclosures and
                consult with your financial advisor.
              </p>
            </div>

            {/* Live Status Indicator */}
            <div className='mt-8 flex items-center justify-center space-x-3 text-sm text-gray-600'>
              <div className='flex items-center space-x-2'>
                <div className='h-3 w-3 animate-pulse rounded-full bg-green-500'></div>
                <span className='font-medium text-green-600'>
                  Live Opportunity
                </span>
              </div>
              <span>•</span>
              <span>Limited spots available</span>
              <span>•</span>
              <span>Target close: 2025</span>
            </div>
          </div>
        </section>
      </div>

      <main className='relative z-10 px-4 py-6 sm:py-8 md:px-6 md:py-12 lg:py-16'>
        <div className='mx-auto max-w-6xl space-y-8 sm:space-y-12 md:space-y-16 lg:space-y-24'>
          {orderedSections
            .filter(
              (item): item is NonNullable<typeof item> => item !== undefined
            )
            .map((section) => {
              // Only render sections with titles (skip component-only sections)
              if (!section || !('title' in section)) {
                return null;
              }
              return (
                <section
                  key={section.id}
                  id={section.id}
                  className='scroll-mt-20'
                >
                  {/* Modern Financial Section Design */}
                  <div className='group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg shadow-sm transition-all duration-200 hover:border-gray-300 hover:shadow-md'>
                    {/* Subtle hover effect */}
                    <div className='absolute inset-0 bg-gradient-to-br from-blue-50/50 to-gray-50/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100'></div>

                    {/* Section Header */}
                    <div className='relative border-b border-gray-200 bg-gray-50 p-8 md:p-12'>
                      <div className='flex flex-col items-start space-y-6 md:flex-row md:items-center md:space-x-8 md:space-y-0'>
                        {/* Icon with enhanced styling */}
                        <div className='flex-shrink-0'>
                          <div className='relative'>
                            <div className='relative flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 shadow-lg md:h-20 md:w-20'>
                              {section.icon}
                            </div>
                          </div>
                        </div>

                        {/* Title and Description */}
                        <div className='flex-1 space-y-4'>
                          <h2 className='text-3xl font-bold leading-tight text-gray-900 md:text-4xl lg:text-5xl'>
                            {section.title}
                          </h2>
                          <p className='text-lg leading-relaxed text-gray-700 md:text-xl'>
                            {section.content}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Section Content */}
                    <div className='relative p-8 md:p-12'>
                      {/* Financial Visuals/Charts */}
                      {section.visuals &&
                        section.visuals.map(
                          (visual: Visual, vIndex: number) => (
                            <div key={vIndex} className='mb-12 last:mb-0'>
                              <div className='mb-6 text-center md:text-left'>
                                <h3 className='mb-3 text-2xl font-semibold text-gray-900'>
                                  {visual.title}
                                </h3>
                              </div>
                              <div className='rounded-xl border border-gray-200 bg-white p-3 shadow-sm sm:p-6'>
                                {visual.component}
                              </div>
                              <p className='mt-4 text-center text-sm italic leading-relaxed text-gray-600 md:text-left'>
                                {visual.explanation}
                              </p>
                            </div>
                          )
                        )}

                      {/* Key Points */}
                      {section.points && (
                        <div className='mt-8'>
                          <h3 className='mb-6 text-xl font-semibold text-gray-900'>
                            Key Investment Highlights
                          </h3>
                          <div className='grid gap-4 md:grid-cols-2'>
                            {section.points.map(
                              (point: string, pIndex: number) => (
                                <div
                                  key={pIndex}
                                  className='group/item flex items-start space-x-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md'
                                >
                                  <div className='flex-shrink-0'>
                                    <div className='flex h-8 w-8 items-center justify-center rounded-full bg-blue-600'>
                                      <Zap className='h-4 w-4 text-white' />
                                    </div>
                                  </div>
                                  <p className='text-gray-700 group-hover/item:text-gray-900'>
                                    {point}
                                  </p>
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      )}

                      {/* Financial Stats */}
                      {section.stats && (
                        <div className='mt-8'>
                          <h3 className='mb-6 text-xl font-semibold text-gray-900'>
                            Key Financial Metrics
                          </h3>
                          <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
                            {section.stats.map((stat: Stat, sIndex: number) => (
                              <div
                                key={sIndex}
                                className='group/stat relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl'
                              >
                                <div className='absolute inset-0 bg-gradient-to-br from-blue-50/50 to-gray-50/50 opacity-0 transition-opacity duration-300 group-hover/stat:opacity-100'></div>
                                <div className='relative'>
                                  <p className='text-3xl font-bold text-blue-600'>
                                    {stat.value}
                                  </p>
                                  <p className='mt-2 text-sm font-medium text-gray-600'>
                                    {stat.label}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Professional Institutional Investors Section */}
                      {section.majorHolders && (
                        <div className='mt-8 space-y-8'>
                          <div className='space-y-3 text-center'>
                            <h3 className='text-3xl font-bold text-gray-900'>
                              World-Class Institutional Backing
                            </h3>
                            <p className='mx-auto max-w-2xl text-lg text-gray-600'>
                              Leading global investors backing Revolut&apos;s
                              mission with over $1.70 billion in funding
                            </p>
                          </div>

                          {/* Primary Investors - Professional Grid */}
                          <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                            {section.majorHolders
                              .filter((holder: MajorHolder) => holder.logo)
                              .map((holder: MajorHolder, iIndex: number) => (
                                <div
                                  key={iIndex}
                                  className='group relative h-full overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:border-blue-300 hover:shadow-xl'
                                >
                                  {/* Hover Effect */}
                                  <div className='absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100'></div>

                                  <div className='relative flex h-full flex-col p-6'>
                                    {/* Logo Container */}
                                    <div className='bg-white/98 mb-6 h-16 w-full overflow-hidden rounded-xl p-3 shadow-sm'>
                                      <div className='flex h-full w-full items-center justify-center'>
                                        <Image
                                          src={holder.logo! || '/mps-logo.png'}
                                          alt={`${holder.name} logo`}
                                          width={120}
                                          height={40}
                                          className='object-contain'
                                          style={{
                                            maxWidth: '100%',
                                            maxHeight: '100%',
                                            width: 'auto',
                                            height: 'auto',
                                          }}
                                        />
                                      </div>
                                    </div>

                                    {/* Investor Details */}
                                    <div className='flex flex-grow flex-col justify-between space-y-3 text-center'>
                                      <div>
                                        <h4 className='mb-2 text-lg font-bold text-gray-900'>
                                          {holder.name}
                                        </h4>
                                        <div className='mb-3 text-sm font-semibold text-blue-600'>
                                          {holder.stake}
                                        </div>
                                      </div>
                                      <div className='text-sm leading-relaxed text-gray-600'>
                                        {holder.entry}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                          </div>

                          {/* Additional Strategic Partners */}
                          <div className='rounded-2xl border border-gray-200 bg-gray-50 p-8'>
                            <div className='mb-6 text-center'>
                              <h4 className='mb-2 text-2xl font-bold text-gray-900'>
                                Additional Strategic Partners
                              </h4>
                              <p className='text-gray-600'>
                                Other world-class institutions supporting
                                Revolut
                              </p>
                            </div>

                            <div className='mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-1'>
                              {section.majorHolders
                                .filter((holder: MajorHolder) => !holder.logo)
                                .map((holder: MajorHolder, iIndex: number) => (
                                  <div
                                    key={iIndex}
                                    className='flex items-center justify-between rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md'
                                  >
                                    <div className='flex-1'>
                                      <p className='mb-1 text-base font-semibold text-gray-900'>
                                        {holder.name}
                                      </p>
                                      <p className='text-sm text-gray-600'>
                                        {holder.entry}
                                      </p>
                                    </div>
                                    <div className='ml-4 text-right'>
                                      <div className='text-sm font-semibold text-blue-600'>
                                        {holder.stake}
                                      </div>
                                    </div>
                                  </div>
                                ))}
                            </div>

                            {/* Other Notable Investors */}
                            <div className='mt-6 rounded-xl border border-gray-200 bg-white p-6 text-center'>
                              <h5 className='mb-3 text-lg font-semibold text-gray-900'>
                                Plus Leading Investment Firms
                              </h5>
                              <div className='flex flex-wrap justify-center gap-3 text-sm text-gray-700'>
                                {[
                                  'Tiger Global',
                                  'NEA',
                                  'Coatue',
                                  'Battery Ventures',
                                  'Salesforce Ventures',
                                ].map((firm, index) => (
                                  <span
                                    key={index}
                                    className='rounded-full border border-gray-200 bg-gray-100 px-3 py-1 text-xs font-medium'
                                  >
                                    {firm}
                                  </span>
                                ))}
                                <span className='rounded-full border border-gray-200 bg-gray-100 px-3 py-1 text-xs font-medium text-gray-500'>
                                  +Others
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Investment Summary - Prominent Display */}
                          <div className='rounded-2xl border border-blue-200 bg-blue-50 p-8 text-center'>
                            <div className='mx-auto max-w-md space-y-4'>
                              <h4 className='text-2xl font-bold text-blue-700'>
                                Total Institutional Investment
                              </h4>
                              <div className='text-5xl font-bold text-blue-600'>
                                $1.70 Billion
                              </div>
                              <p className='text-base text-gray-600'>
                                Raised across multiple funding rounds since 2015
                              </p>
                              <div className='flex items-center justify-center space-x-6 pt-2 text-sm text-gray-600'>
                                <div className='text-center'>
                                  <div className='font-semibold text-gray-900'>
                                    2015-2021
                                  </div>
                                  <div>Funding Period</div>
                                </div>
                                <div className='text-center'>
                                  <div className='font-semibold text-gray-900'>
                                    20+
                                  </div>
                                  <div>Major Investors</div>
                                </div>
                                <div className='text-center'>
                                  <div className='font-semibold text-gray-900'>
                                    Series E
                                  </div>
                                  <div>Latest Round</div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {section.footerNote && (
                            <div className='text-center'>
                              <p className='mx-auto max-w-3xl text-sm italic leading-relaxed text-gray-600'>
                                {section.footerNote}
                              </p>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Benefits Section */}
                      {section.benefits && (
                        <div className='mt-8'>
                          <h3 className='mb-6 text-xl font-semibold text-gray-900'>
                            Investment Benefits
                          </h3>
                          <div className='grid gap-4 md:grid-cols-2'>
                            {section.benefits.map(
                              (benefit: string, bIndex: number) => (
                                <div
                                  key={bIndex}
                                  className='group/benefit flex items-start space-x-4 rounded-lg border border-green-200 bg-green-50 p-4 transition-all duration-300 hover:bg-green-100'
                                >
                                  <div className='flex-shrink-0'>
                                    <TrendingUp className='h-6 w-6 text-green-600' />
                                  </div>
                                  <p className='text-gray-700 group-hover/benefit:text-gray-900'>
                                    {benefit}
                                  </p>
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </section>
              );
            })}

          <Separator className='my-16 border-gray-200 md:my-24' />
        </div>
      </main>

      <footer className='mt-16 border-t border-gray-200 bg-gray-50 px-4 py-12 text-center md:mt-24 md:px-8'>
        <div className='mx-auto max-w-6xl text-gray-700'>
          {/* Global Contact Information Grid */}
          <div className='mb-12 grid grid-cols-1 gap-8 md:grid-cols-3'>
            {/* North America Office */}
            <div className='rounded-lg border border-blue-200 bg-blue-50/30 p-6 shadow-sm'>
              <h4 className='mb-4 text-lg font-semibold text-gray-900'>
                North America Centre
              </h4>
              <div className='space-y-3 text-sm'>
                <div className='flex items-start'>
                  <MapPin className='mr-2 mt-1 h-4 w-4 flex-shrink-0 text-blue-600' />
                  <div className='text-gray-700'>
                    <p className='font-medium'>
                      North America Analytics and Research Centre
                    </p>
                    <p>15 MetroTech Center</p>
                    <p>New York, NY 11201</p>
                    <p className='mt-1 font-medium text-blue-600'>
                      United States
                    </p>
                  </div>
                </div>
                <p className='flex items-center'>
                  <Phone className='mr-2 h-4 w-4 text-blue-600' />
                  <a
                    href='tel:+13473087378'
                    className='text-gray-700 transition-colors hover:text-blue-600'
                  >
                    +1 347 308 7378
                  </a>
                </p>
              </div>
            </div>

            {/* European Office */}
            <div className='rounded-lg border border-purple-200 bg-purple-50/30 p-6 shadow-sm'>
              <h4 className='mb-4 text-lg font-semibold text-gray-900'>
                European Centre
              </h4>
              <div className='space-y-3 text-sm'>
                <div className='flex items-start'>
                  <MapPin className='mr-2 mt-1 h-4 w-4 flex-shrink-0 text-purple-600' />
                  <div className='text-gray-700'>
                    <p className='font-medium'>
                      European Analytics and Research Centre
                    </p>
                    <p>15 Westferry Circus</p>
                    <p>Canary Wharf, London E14 4HD</p>
                    <p className='mt-1 font-medium text-purple-600'>
                      United Kingdom
                    </p>
                  </div>
                </div>
                <p className='flex items-center'>
                  <Phone className='mr-2 h-4 w-4 text-purple-600' />
                  <a
                    href='tel:+442038071168'
                    className='text-gray-700 transition-colors hover:text-purple-600'
                  >
                    +44 20 3807 1168
                  </a>
                </p>
              </div>
            </div>

            {/* Australian Office (MPS Limited) */}
            <div className='rounded-lg border border-green-200 bg-green-50/30 p-6 shadow-sm'>
              <h4 className='mb-4 text-lg font-semibold text-gray-900'>
                Australian Office
              </h4>
              <div className='space-y-3 text-sm'>
                <div className='flex items-start'>
                  <MapPin className='mr-2 mt-1 h-4 w-4 flex-shrink-0 text-green-600' />
                  <div className='text-gray-700'>
                    <p className='font-medium'>
                      Managed Portfolio Services Limited
                    </p>
                    <p>Level 1, 800 Bourke Street</p>
                    <p>Docklands, Victoria 3008</p>
                    <p className='mt-1 font-medium text-green-600'>Australia</p>
                  </div>
                </div>
                <p className='flex items-center'>
                  <Phone className='mr-2 h-4 w-4 text-green-600' />
                  <a
                    href='tel:+61385779534'
                    className='text-gray-700 transition-colors hover:text-green-600'
                  >
                    +61 3 8577 9534
                  </a>
                </p>
                <p className='flex items-center'>
                  <Mail className='mr-2 h-4 w-4 text-green-600' />
                  <a
                    href='mailto:admin@mpsfc.com'
                    className='text-gray-700 transition-colors hover:text-green-600'
                  >
                    admin@mpsfc.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Comprehensive Risk Disclosures */}
          <div className='mb-10 rounded-lg border border-gray-200 bg-white p-8 text-left shadow-sm'>
            <div className='mb-4 flex items-center'>
              <ShieldAlert className='mr-3 h-6 w-6 text-orange-600' />
              <h3 className='text-xl font-semibold text-gray-900'>
                Important Investment Disclosures
              </h3>
            </div>
            <div className='grid grid-cols-1 gap-6 text-sm leading-relaxed md:grid-cols-2'>
              <div>
                <h4 className='mb-2 font-semibold text-gray-900'>
                  Risk Factors
                </h4>
                <p className='text-gray-700'>
                  This investment involves substantial risk, including potential
                  total loss of principal. Pre-IPO investments are illiquid and
                  may not be suitable for all investors. Private company
                  investments carry additional risks including limited financial
                  disclosure, lack of regulatory oversight, and potential for
                  dilution in future funding rounds.
                </p>
              </div>
              <div>
                <h4 className='mb-2 font-semibold text-gray-900'>
                  Wholesale Client Requirements
                </h4>
                <p className='text-gray-700'>
                  This opportunity is exclusively available to wholesale clients
                  as defined by Australian securities regulations. Minimum
                  investment amounts apply. Past performance is not indicative
                  of future results. All financial projections are estimates and
                  actual results may vary significantly.
                </p>
              </div>
            </div>
            <hr className='my-4 border-gray-200' />
            <p className='text-xs text-gray-600'>
              <strong>Legal Notice:</strong> This material is for informational
              purposes only and does not constitute an offer to sell or a
              solicitation of an offer to buy any securities. Any such offer or
              solicitation will be made only through definitive offering
              documents. Investment opportunities are subject to availability
              and investor qualification. Consult with your financial advisor
              before making investment decisions.
            </p>
          </div>

          {/* Notice Platform Information - Mobile Optimized */}
          <div className='mb-10 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6 lg:p-8'>
            {/* Header */}
            <div className='mb-6 flex items-center sm:mb-8'>
              <Landmark className='mr-3 h-6 w-6 flex-shrink-0 text-blue-600' />
              <h3 className='text-lg font-semibold text-gray-900 sm:text-xl'>
                Notice Platform
              </h3>
            </div>

            {/* Notice Platform Information */}
            <div className='text-center'>
              <div className='mb-6 rounded-lg border border-blue-200 bg-blue-50/30 p-6'>
                <h4 className='mb-3 text-lg font-semibold text-gray-900'>
                  Secondary Market Trading Platform
                </h4>
                <p className='mb-4 text-sm text-gray-700'>
                  Notice.co provides institutional-grade secondary market access
                  for pre-IPO investments
                </p>
                <a
                  href='https://notice.co'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700'
                >
                  Visit Notice Platform
                </a>
              </div>

              <div className='text-sm text-gray-600'>
                <p className='mb-2'>
                  <strong>Platform Features:</strong> 90+ broker partners •
                  Accredited investor verification • Secure transactions
                </p>
                <p>
                  <strong>Investment Structure:</strong> Special Purpose
                  Vehicles (SPVs) and forward contracts
                </p>
              </div>
            </div>
          </div>

          {/* Notice Platform Information - Mobile Optimized */}
          <div className='mb-8 text-center text-sm text-gray-600'>
            <div className='mx-auto max-w-2xl'>
              <p className='font-semibold text-gray-900'>
                Notice, Inc. - Secondary Market Platform
              </p>
              <p className='mt-1'>Pre-IPO Investment Trading Platform</p>
              <p className='mt-1'>Serving Accredited Investors Globally</p>
              <p className='mt-2'>
                Platform facilitates indirect exposure via SPVs and forward
                contracts
              </p>
            </div>
          </div>

          {/* Copyright & Final Disclaimers */}
          <div className='border-t border-gray-200 pt-8'>
            <p className='mb-2 text-sm text-gray-600'>
              &copy; {new Date().getFullYear()} Notice, Inc. All rights
              reserved.
            </p>
            <p className='mb-4 text-xs text-gray-500'>
              Revolut Pre-IPO Investment Information presented via Notice
              platform. All information current as of{' '}
              {new Date().toLocaleDateString('en-US', {
                month: 'long',
                year: 'numeric',
              })}
              .
            </p>
            <p className='text-xs text-gray-600'>
              Investment opportunities are limited and subject to availability.
              Indirect transfers only via SPV structures.
              <br className='hidden sm:inline' />
              This presentation contains forward-looking statements that involve
              risks and uncertainties.
            </p>
          </div>
        </div>
      </footer>

      {/* Cookie Notice */}
      {showCookieNotice && (
        <div className='fixed bottom-0 left-0 right-0 z-50 bg-slate-900/95 p-4 shadow-lg backdrop-blur-sm'>
          <div className='mx-auto flex max-w-6xl items-center justify-between'>
            <div className='flex-1'>
              <p className='text-sm text-gray-300'>
                We use cookies to enhance your experience and analyze site
                usage.
                <Link
                  href='#'
                  className='ml-1 text-blue-400 hover:text-blue-300'
                >
                  Learn more
                </Link>
              </p>
            </div>
            <div className='ml-4 flex space-x-2'>
              <Button
                size='sm'
                variant='outline'
                onClick={() => setShowCookieNotice(false)}
                className='text-xs'
              >
                Decline
              </Button>
              <Button
                size='sm'
                onClick={acceptCookies}
                className='bg-blue-600 text-xs hover:bg-blue-700'
              >
                Accept
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
