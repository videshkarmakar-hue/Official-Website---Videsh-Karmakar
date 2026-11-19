import {useEffect, useMemo, useState} from 'react';
import {PORTFOLIO_DATA, type ArtistPortfolioData} from './data/portfolioData';
import {collectSiteUpdates} from './lib/siteUpdates';
import {Navbar} from './components/Navbar';
import {HeroSection} from './components/HeroSection';
import {SocialStrip} from './components/SocialStrip';
import {BioSection} from './components/BioSection';
import {YouTubeShowcase} from './components/YouTubeShowcase';
import {DevelopedAppsSection} from './components/DevelopedAppsSection';
import {ContactSection} from './components/ContactSection';
import {Footer} from './components/Footer';

export default function App() {
  const [portfolio, setPortfolio] = useState<ArtistPortfolioData>(PORTFOLIO_DATA);
  const siteUpdates = useMemo(() => collectSiteUpdates(portfolio), [portfolio]);

  useEffect(() => {
    let isMounted = true;
    fetch('/api/portfolio')
      .then((res) => (res.ok ? res.json() : null))
      .then((data: ArtistPortfolioData | null) => {
        if (isMounted && data) {
          setPortfolio(data);
        }
      })
      .catch(() => {
        // Hydrated initial data remains active seamlessly
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0b0a12] text-[#eae9f2] selection:bg-[#a4a2bb] selection:text-[#0b0a12]">
      <Navbar brandName={portfolio.name} updates={siteUpdates} />

      <main>
        <HeroSection profile={portfolio} />
        <SocialStrip socialLinks={portfolio.socialLinks} />
        <BioSection profile={portfolio} />
        <YouTubeShowcase youtubeChannel={portfolio.youtubeChannel} />
        <DevelopedAppsSection apps={portfolio.developedApps} />
        <ContactSection emailAddress="videshkarmakar@gmail.com" />
      </main>

      <Footer name={portfolio.name} socialLinks={portfolio.socialLinks} />
    </div>
  );
}
