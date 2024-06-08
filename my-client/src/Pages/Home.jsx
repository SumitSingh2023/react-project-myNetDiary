import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import BackgroundBox from "../Components/Home/BackgroundBox";
import QuoteBox from "../Components/Home/QuoteBox";
import CardHeading from "../Components/Home/CardHeading";
import CardLinkBtn from "../Components/Home/CardLinkBtn";
import Features from "../Components/Home/Features";
import ImageCarousel from "../Components/Home/ImageCarousel";
import FoodDiaryBox from "../Components/Home/FoodDiaryBox";
import Footer from "../Components/Footer/Footer";
import { Box, Image } from "@chakra-ui/react";
import { featuresData } from "../wrappers_data_store/featuresData";
import { testimoData } from "../wrappers_data_store/testimoData";
import { articlesData } from "../wrappers_data_store/articlesData";
import { myTexture } from "../Components/Home/MyTexture";
import { carouselData } from "../wrappers_data_store/ImageCarousData";
import { blurIconsData } from "../wrappers_data_store/iconsData";
import { broadIconsData } from "../wrappers_data_store/iconsData";
import texture from "../Assets/mynet-home-img/pattern-grunge-400x400.jpg";
import IconLine from "../Components/Home/IconLine";







const Home = () => {
  const specs = myTexture(texture, "auto");

  const testimoProps = {
    imgWidth: "50%",
    imgHeight: "200px",
  };

  const featureProps = {
    imgWidth: "100%",
    imgHeight: "70vh",
    imgShadow: "dark-lg",
  };

  const articlesProps = {
    divWidth: "95%",
    divShadow: "md",
    hoverRules: { textDecoration: "underline" },
    txtalign: "left",
    titleColor: "#46618A",
    infoColor: "#46618A",
    midLine: true,
  };

  return (
    <section>
      <Navbar />
      <BackgroundBox />
      <Box mt="8rem">
        <QuoteBox>
          “You really can't go wrong with MyNetDiary as a scientifically-proven
          way to help you lose weight”
        </QuoteBox>
        <Image
          m="0 auto"
          transform="scale(0.5)"
          src={`https://s3.amazonaws.com/img.mynetdiary.com/images/wh-logo.svg`}
        />
      </Box>
      <Box m="2rem 0">
        <IconLine icons={blurIconsData} />
      </Box>

      {/* Testimoniels */}
      <Box p="3rem" {...specs}>
        <CardHeading>What it takes to succeed</CardHeading>
        <Features
          featuresData={testimoData}
          commonProps={testimoProps}
          column={[1, 1, 2]}
        />
      </Box>
      <Box mt="8rem">
        <CardHeading>Top Rated Calorie Counter App</CardHeading>
        <QuoteBox>
          “This is my favorite food diary app. I used six of the "top" apps in
          this category for several days so that I could compare them and select
          what worked best for me. MyNetDiary was the winner. Intuitive, simple
          layout, decent database, appealing graphic design, and no ads.”
        </QuoteBox>
        <Box textAlign="center" p="2rem">
          <CardLinkBtn path=".">SEE MORE TESTIMONIALS</CardLinkBtn>
        </Box>
      </Box>

      <Box margin="8rem 0" borderBottom="1px dotted grey" />

      {/* Features */}

      <Box>
        <Features featuresData={featuresData} commonProps={featureProps} />
        <Box textAlign="center" p="2rem">
          <CardLinkBtn path=".">MORE FEATURES</CardLinkBtn>
        </Box>
      </Box>
      <Box {...specs} bg="#23a55b">
        <ImageCarousel carouselData={carouselData} />
      </Box>

      {/* Articles */}

      <Box>
        <CardHeading>Being Healthy Has Never Been Easier</CardHeading>
        <Features
          featuresData={articlesData}
          commonProps={articlesProps}
          titleColor="#46618A"
          infoColor="#46618A"
          column={[1, 1, 2]}
        />
        <Box textAlign="center" p="2rem">
          <CardLinkBtn path=".">VIEW ALL ARTICLES</CardLinkBtn>
        </Box>
      </Box>

      <Box m="2rem 0">
        <CardHeading>What it takes to succeed</CardHeading>
        <IconLine icons={broadIconsData} />
      </Box>

      <Box {...specs} bg="#ffab53" p="2rem">
        <FoodDiaryBox />
      </Box>

      <Box pt='5rem'>
        <Footer />
      </Box>
    </section>
  );
};

export default Home;
