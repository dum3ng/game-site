type GetSource = 'ios' | 'google' | 'wechat'

type GetLinks = {
    [key in GetSource]?: string
}

const logoMap: { [k in GetSource]: string } = { ios: '/img/store/appstore.png', google: '/img/store/googleplay.png', wechat: '/img/store/wechat.png' }

export default function AppGet(links: GetLinks) {

    return (<div>
        {Object.keys(links).map((k: GetSource) => {
            return <div key={k}>
                <a href={links[k]}>
                    <img src={logoMap[k]} />
                </a>
            </div>
        })}
    </div>)
}