import clsx from 'clsx'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import HomepageFeatures from '@site/src/components/HomepageFeatures'

import Heading from '@theme/Heading'
import styles from './index.module.css'

const games = { 诗词迷踪: '/shicimizong' }

export default function Home() {
    const { siteConfig } = useDocusaurusContext()
    return (
        <Layout title={``} description="山海无界">
            <main>
                {Object.entries(games).map(([name, url]) => {
                    return (
                        <a key={name} href={url}>
                            {name}
                        </a>
                    )
                })}
            </main>
        </Layout>
    )
}
