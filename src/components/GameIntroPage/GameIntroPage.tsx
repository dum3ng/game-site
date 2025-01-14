import Contact from "../Contact";
import GameIntro from "../GameIntro";
import AppGet from '@site/src/components/AppGet/AppGet';


type IProps = {
    icon: string, name: string, description: string
}
export default function GameIntroPage(props) {
    return <div style={{ paddingTop: '64px' }}>
        <GameIntro {...props} />

        {/* <AppGet ios='temp' google='some' wechat='example.com' /> */}
    </div>
}