import React from 'react'
import Layout from '@theme/Layout'
import GameIntroPage from '../../components/GameIntroPage/GameIntroPage'
import Head from '@docusaurus/Head'

const description = '回味传统诗词，考验眼力脑力。每日谜题，无尽的任务。'

export default function Hello() {
    return (
        <Layout title="诗词迷踪" description="诗词迷踪">
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '50vh',
                    fontSize: '20px',
                }}
            >
                <GameIntroPage
                    icon="/img/shicimizong/icon.png"
                    name="诗词迷踪"
                    description={description}
                />

                {/* <AppGet ios='temp' google='some' wechat='example.com' /> */}
            </div>
        </Layout>
    )
}
