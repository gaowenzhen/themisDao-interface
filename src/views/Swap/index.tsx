import "./index.css"
import { useAppSelector } from "../../hooks";
import { useEffect } from "react";

function Swap(){
    let iframewin:any = null
    const theme: { theme: string } = useAppSelector(state => {
        return state.theme
      })

      useEffect(() => {
      let swapiframe = (document.querySelector("#swapiframe") as HTMLIFrameElement) 
      if (swapiframe) {
        setTimeout(() => {
            const subwin:any = swapiframe?.contentWindow
            if (subwin) {
               if (subwin.ReSetTheme) {
                   subwin.ReSetTheme(theme.theme)
               }
            }
        }, 360)
      }
    }, [theme])

    const sawpload = (e:any) => {
       const subwin = e.target.contentWindow
       setTimeout(() => {
        iframewin = subwin
        subwin.ReSetTheme(theme.theme)
       }, 680)
    }

    // http://localhost:3000/swap
    // /out/swap.html
    return <iframe onLoad={sawpload} id="swapiframe" allow="clipboard-read; clipboard-write" src="/out/swap.html" width="100%">Your browser 
    does not support iframes.</iframe>
}


export default Swap;