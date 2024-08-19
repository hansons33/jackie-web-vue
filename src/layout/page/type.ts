import { HeaderProps } from "../header/type"
import { FooterProps } from "../footer/type"
export type PageProps =
    | {
          hasHeader: true
          hasFooter: false
          headerProps: HeaderProps
      }
    | {
          hasFooter: true
          hasHeader: false
          footerProps: FooterProps
      }
    | {
          hasHeader: true
          hasFooter: true
          headerProps: HeaderProps
          footerProps: FooterProps
      }
