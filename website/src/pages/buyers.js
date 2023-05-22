import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'

const call_outs = [
  {
    title: 'For Buyers',
    path: 'docs/Dreamcatcher%20Charter',
  },
  {
    title: 'For Funders',
    path: 'docs/whitepaper',
  },
  {
    title: 'Builder Deep Dive',
    path: 'pool/',

  },
]

const head_banners = [

  {
    title: 'Dust',
    path: 'dust/',
    imageUrl: 'img/dreamcatcher.svg',
    description: (
      <>
        Tapping the value of your Knowledge

      </>
    ),
  },
]

const info_sections = [

  {
    imageUrl: 'img/undraw_knowledge_re_5v9l.svg',
    background: 0,
    title: (
      <><h1>Your Needs are Gold-Dust</h1>    </>
    ),
    description: (
      <>
      As a Buyer you're sitting on a potential goldmine.  You understand what problem your company needs to have solved, how solving it may give your company a competitive advantage and how it can reduce costs.  
<><br></br></><><br></br></>
But the value of identifying those opportunities doesn't stop there; it's likely that the problem you're trying to solve isn't unique - it's likely felt by others.  Why not then reuse this work by allowing it to be resold to others on a world stage, and allowing others to build it out further while benefitting from their improvements?
<><br></br></><><br></br></>
Dreamcatcher does this by:
<><br></br></><><br></br></>
1. Providing an efficient marketplace to get software built at lower risk than directly contracting with a development company
<><br></br></>
2. Registering the contribution your company puts into helping mold and design that software, and owning those Packets as an asset.  
<><br></br></>
3. Providing an automated marketplace which allows others to reuse and further improve the software, and 
<><br></br></>
4. Provides a revenue stream should it become adopted or incorporated into other software.  


 
      </>
    ),
  },


  {
    background: 1,
        imageUrl: 'img/undraw_questions_re_1fy7.svg',
    title: (
      <><h1>State the problem, not the solution</h1>    </>
    ),
    description: (
      <>
You know your business, software devs don't.  Software devs know software; there's a good chance you - not so much.
<><br></br></><><br></br></>
This information gradient - the difference between knowledge areas when two groups try to collaborate - is the leading reason software development projects for business go wrong.
<><br></br></><><br></br></>
As a Buyer in the Dreamcatcher you start by stating the problem in business terms and inviting Ideas on how to solve it.  
<><br></br></><><br></br></>
Then through Open Collaboration any Member is free to Innovation and improve.
<><br></br></><><br></br></>
Perhaps this problem is commonplace, and you only need 5% change in existing code to make it perfect for you.  In which case your cost and risk has just plummeted.  
<><br></br></><><br></br></>
Perhaps this problem is common in another industry and Ideas on how to solve it can be combined; perhaps through the Dreamcatcher Marketplace you contribute to ground-breaking Idea.
<><br></br></><><br></br></>
Perhaps you avoid the 'contract trap' many Buyers experience when hiring a software dev company - that of developers doing exactly what they're told through the contract, but not what you want.  This leads to lengthy and ever more detailed specs that shut down Innovation, not open it up.
    </>
    ),
  },
    {
    background: 0,
        imageUrl: 'img/undraw_moving_forward_re_rs8p.svg',
    title: (
      <><h1>Forward Apps</h1>    </>
    ),
    description: (
      <>
How does having an app built for your company with zero up-front cost sound, where you only pay when it's delivered and you use it?
<><br></br></><><br></br></>
That's the concept behind Forward Apps
<><br></br></><><br></br></>
You as the Buyer write clearly what the problem is that you're trying to solve, and put that problem in a Dreamcatcher Pool.
<><br></br></><><br></br></>
Developers from around the world can pick it up, work on it and deliver it back to you for consideration.
<><br></br></><><br></br></>
If you want to incentivise it to be done faster, put a bounty into escrow, and offer that to whoever delivers what you asked for.  You then share in the rewards if that solution gets reused.
<><br></br></><><br></br></>
If time is not of the essence, allow the market to decide if it's worth solving or to propose solutions that already exist.  You get recognition for identifying a problem, but more importantly you get the software you want without the risk, cost and distraction of hiring a dev company.
<><br></br></><><br></br></>
Forward Apps shows the market what's needed.

</>
    ),
  },
    {
    background: 1,
        imageUrl: 'img/undraw_engineering_team_re_fvat.svg',
    title: (
      <><h1>A Trusted Environment</h1>    </>
    ),
    description: (
      <>
The primary method of making these deals on the Dreamcatcher is through Pools.  Pools are like a club, where all involved agree to abide by the rules.
<><br></br></><><br></br></>
This includes off-the-shelf licensing and contracting, including arbitration for disputes and QA for the release of escrowed funds for work completed.
<><br></br></><><br></br></>
It allows all to get on with the job of building software rather bearing the cost and time of recruiting, sifting, tendering, contracting and policing that contract. 
<><br></br></><><br></br></>
It provides third party protection, backed by automated execution of contracts and redress ultimatedly through the usual channels.  And so you get all the upside of working in a trusted network, without the cost of one-to-one negotiations.
<><br></br></><><br></br></>
This allows the problems to be solved to get smaller, as the overhead is close to zero.  With smaller problems to solve, there can be greater speed of innovation.
<><br></br></><><br></br></>
Trust leads to cooperation, leads to Innovation.


</>
    ),
  },

]


const badgesMap = {
  ctf: <span class="badge badge--danger">CTF</span>,
  service: <span class="badge badge--primary">service</span>,
}
function Call_out({ imageUrl, path, title, description, badges = [] }) {
  const imgUrl = useBaseUrl(imageUrl)
  return (
    <div className={clsx('col col--4 dreamcatcher_callout_padding', styles.feature)}>
      {imgUrl && (
        <Link className="text--center" to={useBaseUrl(path)}>
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </Link>
      )}
      <h3>
        <Link
          className={clsx(
            'button button--outline button--secondary button--lg',
            styles.getStarted
          )}
          to={useBaseUrl(path)}
        >
          {title}
        </Link>
      </h3>
      {badges.map((name) => (
        <span>{badgesMap[name]} </span>
      ))}
      <p>{description}</p>
    </div>
  )
}

function Head_Banner({ imageUrl, path, title, description, badges = [] }) {
    const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  const imgUrl = useBaseUrl(imageUrl)
  return (

    <div className={clsx('hero hero--primary', styles.hero_Buyers)}>
      {imgUrl && (
        <Link className="text--center" to={useBaseUrl(path)}>
          <img src={imgUrl} alt={title} />
        </Link>
      )}
      <h1>
        {description}
      </h1>
      
      <p></p>
    </div>
  )
}

function Info({ imageUrl, path, title, description, badges = [], background }) {
    const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  const imgUrl = useBaseUrl(imageUrl)
    if (background==1) {

      return (
    <>

      {title}
        <div className={clsx('hero hero--primary', styles.heroBanner2)}>

          {imgUrl && (
            <Link className="text--center" to={useBaseUrl(path)}>
              <img src={imgUrl} alt={title} />
            </Link>
        )}


          {description}

        </div>
           </>
      )
    }
    else {

            return (
    <>
      {title}

        <div className={clsx('hero hero--primary', styles.heroBanner2)}>
          
        
          {description}
        
              {imgUrl && (
            <Link className="text--center" to={useBaseUrl(path)}>
              <img src={imgUrl} alt={title} />
            </Link>
        )}
          <p></p>
        </div>
               </>
      )
    }

}

function Briefing() {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  return (
    <Layout
      title={`${siteConfig.title} Briefing`}
      description="The various ways contribution can be made to the Dreamcatcher"
    >

   {head_banners && head_banners.length > 0 && (
          <header className={styles.hero_Buyers}>
            <div className="container">
              <div className="row">
                {head_banners.map((props, idx) => (
                  <Head_Banner key={idx} {...props} />
                ))}
              </div>
            </div>
          </header>
 )}
      <main>
                {(
          <section className={styles.hero_01}>
            <div className="container">
 
            <center><Link
              className={clsx(
                'dreamcatcher_button buttonGetInvolved',
                styles.getStarted
              )}
              to={useBaseUrl('buyers-go-live/')}
            >
              Go Live
            </Link></center>
            </div>
          </section>
        )}

        {info_sections && info_sections.length > 0 && (
          <section>
            <div className="container">
   

              <div className="row">
          
                {info_sections.map((props, idx) => (
                  <Info key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>


        )}




                {(
          <section className={styles.hero_Buyers}>
            <div className="container">
 
            <center><Link
              className={clsx(
                'dreamcatcher_button buttonGetInvolved',
                styles.getStarted
              )}
              to={useBaseUrl('buyers-go-live/')}
            >
              Go Live
            </Link></center>
            </div>
          </section>
        )}


      </main>
    </Layout>
  )
}

export default Briefing
