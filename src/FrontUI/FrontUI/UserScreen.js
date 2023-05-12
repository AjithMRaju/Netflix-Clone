import React ,{Fragment}from 'react'
import SignIn from "../SignInSection/Section1/SignIn";
import SectionTwo from "../SignInSection/Section2/SectionTwo";
import SectionThree from "../SignInSection/Section3/SectionThree";
import SectionFour from "../SignInSection/Section4/SectionFour";
import SectionFive from "../SignInSection/Section5/SectionFive"
// SECTION TWO PROPS PARAMS HERE
const IMAGE_URL="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
const VIDEO_URL="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
const Default_Img="https://occ-0-4994-3646.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABYjXrxZKtrzxQRVQNn2aIByoomnlbXmJ-uBy7du8a5Si3xqIsgerTlwJZG1vMpqer2kvcILy0UJQnjfRUQ5cEr7gQlYqXfxUg7bz.png?r=420"
const UserScreen = () => {
  return (
    <Fragment>
        <SignIn/>
        <SectionTwo IMAGE_URL={IMAGE_URL} VIDEO_URL={VIDEO_URL}/>
        <SectionThree/>
        <SectionTwo Default_Img={Default_Img}/>
        <SectionFour/>
        <SectionFive/>
    </Fragment>
  )
}

export default UserScreen
