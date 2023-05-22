import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'

const hero_01 = [
  {

    title: 'Direct Connection',
    imageUrl: 'img/dreamcatcher.svg',
    description: (
      <>
Dreamcatcher directly connects economic reward to the value of Members' contributions.  Whether your area is in funding, buying, or building and selling software, this direct connection ensures that all involved are working towards exactly the same goal and have the same incentives.
   </>
    ),
  },
  {
    title: 'Open and Incentivised',
    imageUrl: 'img/undraw_reuse.svg',
    description: (
      <>
 Dreamcatcher allows anyone, anywhere, to turn up and just 'do' - allowing you to contribute without permission in an open Market that turns Ideas into Products.  Membership is worldwide, has no barrier to entry and incentivises high quality contributions.

 </>
    ),
  },
  {
    title: 'Packetised',
    imageUrl: 'img/undraw_startup.svg',
    description: (
      <>
        Members on the Dreamcatcher deal in 'Packets' - unitary pieces software or documented knowledge whose quality has been verified by a trusted and neutral Quality Assurance service, and which address an identified need.  
        </>
    ),
  },

    {
    title: 'Quality Guardians',
    imageUrl: 'img/undraw_personal_finance_tqcd.svg',
    description: <>
    Dreamcatcher ensures all Members can see when a Packet is 'done' or 'not done'.  This reduces the cost to all involved by eliminating ambiguity both when specifying an Idea, and when claiming it's solved.  It does this by incentivising Members to become QA Guardians who rely on their own Reputation to either release escrow or withhold it, a process which is automated and transparent from the start.
    </>,
  },

    {
    title: 'Attribution',
    imageUrl: 'img/undraw_appstore.svg',
    description: (
      <>
     Once 'done', Packets act like immutable equity that cannot be diluted or taken away; they're Attributed - i.e. owned - by all Members who contributed to their creation.  They can be traded and can generate revenue streams, all with the certain knowledge that those who contributed get rewarded.
 </>
    ),
  },

  {
    title: 'Reuse and Recombination',
    imageUrl: 'img/undraw_captable.svg',
    description: (
      <>
Packets aren't just for one App; they can be re-used in many Apps and improved on the way.  This speeds up development, and can offset development cost.  If they do prove useful, Dreamcatcher tracks Attribution automatically, ensuring a passive income stream for the original contributors.
      </>
    ),
  },

]


const hero_02 = [
  {
    description: <><h1>Dreamcatcher</h1></>,
  },

]

const hero_Investors = [
  {
    description: <><h1>Funds in, Software out</h1>
As a Funder it can be difficult to communicate exactly how your cash should be spent and understand whether it's being spent well.  Dreamcatcher's use of QA ensures this from both sides; the QA process ensures that what you asked for is what you meant, while also ensuring that, once the work is done, escrowed payments are only released for Packets that contribute to turning that request into a Product.

    </>,
  },
    {
    description: <><h1>Targetted and Granular</h1>Direct Connection, at a Packetised level, allows you to target precisely those areas that you believe will have highest return, down to a single feature.  This  reduces 'mission-creep' and time to market, and therefore risk and cost.</>,
 
  },
    {
    description: <><h1>Leverage a world-wide talent pool</h1>Open Collaboration allows the market to find the talent needed to make your money work.  By opening Dreamcatcher up, Funders get the benefit of removing the cost of trawling for workers, while Packetisation allows for the use of deep specialists.  Like spice - a small amount of the right stuff can have a profound effect on the end product.</>,
  

  },
]

const hero_Builders = [
  {
    description: <><h1>Permissionless Work</h1>As a Do-er - someone who gets something done - there are no arbitrary gatekeepers on Dreamcatcher.  If you have the skill, search for a Packet that's needing done and do it.  That Packet will be Attributed to you and those who helped, can be re-used passively to generate income, and any escrowed fees offered will be released solely on the quality of your work.</>,
  },  {
    description: <><h1>Be the Expert</h1>Tap into your deep specialisation by contributing at exactly the right time to maximise your value.  Have a skill few others do?  Use that to specialise and outcompete the market.  You're not being paid for your time, you're being rewarded for high quality, completed, granular Packets.</>,
  },
    {
    description: <><h1>Improve, Innovate, Earn</h1>If you see an App on Dreamcatcher aimed at one industry, and know that it can be used elsewhere, build on it, customise it, improve it, or just sell it.  Dreamcatcher tracks that effort and value like any other Packet, and takes care of licensing, revenue collection and payments automatically.</>,
  },
]

const hero_Buyers = [
  {
    description: <><h1>Your Needs are Gold-Dust</h1>There's nothing more valuable when building a Product as knowing that someone will buy it.  As a Buyer, you need that piece of software, and if you do, more than likely many will.  That's Gold-Dust.  Dreamcatcher ensures that Buyers receive Attribution for submitting Requests and share in the rewards when it's built and being used.</>,
  },  
    {
    description: <><h1>Customisation Sniper</h1>Is there an App out there that exists but isn't quite right? Dreamcatcher's use of Packets of work allows you to fund just the function changes you need, building on the original to get precisely what you want.  This is enabled through Dreamcatcher's licensing framework which gives access to the App source, and Attribution to automatically ensure everyone gets paid.
</>,
  },

    {
    description: <><h1>Forward App Store</h1>Dreamcatcher allows Buyers to ask for something to be built, to put up escrowed funds to attract others to build it, or to just sit back and only pay when it's built.  These 'asks' - Requests - are valuable in their own right as they show a real demand.  Requests are also Packetised and Attributed, potentially giving returns to the Buyer if they discover a problem that can be solved once and which many can benefit from.
</>,
  },


]


function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl)
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

function Home() {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  return (
    <Layout
      title={`${siteConfig.title}`}

      description="Perpetual Innovation Machine" 
    >
      <header className={clsx('hero hero--primary', styles.heroBanner)}>

        <div className="container">
                    <img src="img/dreamcatcher.svg" />

          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          
        </div>
      </header>
      <main>
        {hero_01 && hero_01.length > 0 && (
          <section className={styles.hero_01}>
            <div className="container">
              <h1> An Open, Packetised Innovation Market </h1>
              <div className="row">
                {hero_01.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
 
        {hero_Investors && hero_Investors.length > 0 && (
          <section className={styles.hero_Investors}>
            <div className="container">
            <h1> Funders </h1>

              <div className="row">
                {hero_Investors.map((props, idx) => (
                  <Feature key={idx} {...props} />

                ))}
              </div>
            <center><Link
              className={clsx(
                'dreamcatcher_button buttonInvestors',
                styles.getStarted
              )}
              to={useBaseUrl('investors/')}
            >
              Funders Learn more
            </Link></center>

            </div>
          </section>
        )}

        

       {hero_Builders && hero_Builders.length > 0 && (
          <section className={styles.hero_Builders}>
            <div className="container">
            <h1> Do-ers </h1>

              <div className="row">
                {hero_Builders.map((props, idx) => (
                  <Feature key={idx} {...props} />

                ))}
              </div>
            <center><Link
              className={clsx(
                'dreamcatcher_button buttonBuilders',
                styles.getStarted
              )}
              to={useBaseUrl('builders/')}
            >
              Do-ers Learn more
            </Link></center>

            </div>
          </section>
        )}
        {hero_Buyers && hero_Buyers.length > 0 && (
          <section className={styles.hero_Buyers}>
            <div className="container">
            <h1> Buyers </h1>

              <div className="row">
                {hero_Buyers.map((props, idx) => (
                  <Feature key={idx} {...props} />

                ))} 
              </div>
            <center><Link
              className={clsx(
                'dreamcatcher_button buttonBuyers',
                styles.getStarted
              )}
              to={useBaseUrl('buyers/')}
            >
              Buyers Learn more
            </Link></center>

            </div>
          </section>
        )}
        
        {(
          <section className={styles.hero_white}>
            <div className="container">
 

            </div>
          </section>
        )}


 {hero_01 && hero_01.length > 0 && (
          <section className={styles.hero_01}>
            <div className="container">
                          <h1> Dreamcatcher </h1>
              <h1> Maximising Innovation </h1>
             <center><img src="img/dreamcatcher.svg"/></center>
            </div>
          </section>
        )}





      </main>
    </Layout>
  )
}

export default Home