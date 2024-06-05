import React from 'react'
import BackgroundAnimation from '../BackgroundAnimation'
import { MyContainer, MyBg, MyLeftContainer, Img, MyRightContainer, MyInnerContainer, TextLoop, Title, Span, SubTitle, ResumeButton } from './Style'
import MyImg from '../../images/MyImage.jpg'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';

const MySection = () => {
    return (
        <div id="about">
            <MyContainer>
                <MyBg>
                    <BackgroundAnimation />
                </MyBg>
                <MyInnerContainer >
                    <MyLeftContainer id="Left">
                        <Title>Hi, I am <br /> {Bio.name}</Title>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <ResumeButton href={Bio.resume} target='display'>Scroll Down</ResumeButton>
                    </MyLeftContainer>

                    <MyRightContainer id="Right">

                        <Img src={MyImg} alt="hero-image" />
                    </MyRightContainer>
                </MyInnerContainer>

            </MyContainer>
        </div>
    )
}

export default MySection