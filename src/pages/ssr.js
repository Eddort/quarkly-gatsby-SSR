import React from "react"
import theme from "theme"
import { Theme, Link, Text, Section } from "@quarkly/widgets"
import { Helmet } from "react-helmet"
import { GlobalQuarklyPageStyles } from "global-page-styles"
import { RawHtml } from "@quarkly/components"
import fetch from "node-fetch"

const SSRPage = ({ serverData }) => {
  console.log({ serverData }, "!!!!")
  return (
    <Theme theme={theme}>
      <GlobalQuarklyPageStyles pageUrl={"index"} />
      <Helmet>
        <title>Quarkly export</title>
        <meta
          name={"description"}
          content={"Web site created using quarkly.io"}
        />
        <link
          rel={"shortcut icon"}
          href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"}
          type={"image/x-icon"}
        />
      </Helmet>
	  222
      <Section
        text-align="center"
        background-color="--primary"
        color="--light"
        padding="100px 0"
        sm-padding="40px 0"
      >
        <Text
          as="h1"
          font="--headline1"
          md-font="--headline2"
          margin="10px 0 0 0"
        >
          Quarkly + Gatsby SSR = &lt;3
        </Text>
        <img alt="Happy dog" src={serverData.message} />
      </Section>
      <Link
        font={"--capture"}
        font-size={"10px"}
        position={"fixed"}
        bottom={"12px"}
        right={"12px"}
        z-index={"4"}
        border-radius={"4px"}
        padding={"5px 12px 4px"}
        background-color={"--dark"}
        opacity={"0.6"}
        hover-opacity={"1"}
        color={"--light"}
        cursor={"pointer"}
        transition={"--opacityOut"}
        quarkly-title={"Badge"}
        text-decoration-line={"initial"}
        href={"https://quarkly.io/"}
        target={"_blank"}
      >
        Made on Quarkly
      </Link>
      <RawHtml>
        <style place={"endOfHead"} rawKey={"614b0f32790876002294c5cb"}>
          {
            ":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"
          }
        </style>
      </RawHtml>
    </Theme>
  )
}

export default SSRPage

export async function getServerData({ params }) {
  try {
    const imageReq = await fetch(
      `https://dog.ceo/api/breed/akita/images/random`
    )

    if (!imageReq.ok) {
      throw new Error(`Response failed`)
    }
	// console.log(await imageReq.json())
    return {
      props: await imageReq.json(),
      headers: {
        "x-dog": "good",
      },
    }
  } catch (error) {
    console.error(error, "???")
    return {
      headers: {
        status: 500,
      },
      props: {},
    }
  }
}
