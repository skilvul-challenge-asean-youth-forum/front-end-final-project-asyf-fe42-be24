import MainLayout from "@/layouts/main-layout";
import ContentLayout from "@/layouts/content-layout";
import Navbar from "@/components/Navbar";
import ArticleLates from "@/components/ArticleLates";
import Comments from "@/components/Comments";

const ArticleDetails = () => {
  return (
    <MainLayout>
      <Navbar />
      <ContentLayout>
        <h1 className="text-center mb-12 font-bold text-3xl">Article title</h1>
        <article className="flex flex-col md:flex-row md:gap-x-8 gap-y-4">
          <div>
            <figure>
              <img src="./ArticleHero.svg" alt="image" />
            </figure>
            <p className="text-justify max-w-7xl">
              BANGKOK: Thailand’s popular tourist destination Chiang Mai was
              shrouded in unhealthy air on Thursday (Mar 9), with its air
              quality ranked the worst in the world. At 2pm local time, Chiang
              Mai’s Air Quality Index (AQI) reading in Chang Phueak subdistrict
              was recorded at 187 – an unhealthy level – according to the Air
              Quality and Noise Management Bureau of Thailand’s Pollution
              Control Department. The public was advised to monitor their health
              as well as reduce outdoor activities if they experience difficulty
              breathing, eye irritation or coughing. "At-risk individuals should
              avoid strenuous physical activity, particularly outdoors, and
              consult doctors if symptoms worsen," the Air Quality and Noise
              Management Bureau said. Chiang Mai’s air pollution was the worst
              in the world on IQAir – a technology partner of the United Nations
              Environmental Programme. IQAir’s city pollution rankings compare
              95 global cities worldwide with measured PM2.5 data. “PM2.5
              concentration in Chiang Mai is currently 22.8 times the WHO annual
              air quality guideline value,” said IQAir on its website. PM2.5 is
              one of the deadliest forms of air pollution – tiny particles with
              a diameter of less than 2.5 micrometres or about 3 per cent the
              diameter of a human hair. This means they can penetrate deep
              inside the lungs, where they either remain for long periods or
              pass into the bloodstream unfiltered. Long-term exposure to these
              particles can result in cardiovascular and respiratory diseases,
              and cancers. Residents in Chiang Mai and other northern Thai
              provinces have been reeling from poor air quality for more than a
              week. The Environmental and Pollution Control Office 1 (Chiang
              Mai) reported 46 hotspots in the province on Wednesday, with 35 of
              them located in forest areas. Eighty-one other hotspots were also
              reported in Chiang Rai, Lamphun and Mae Hong Son. On Tuesday,
              Chiang Mai governor Nirat Pongsitthavorn ordered various
              provincial work units to reduce the impact of air pollution on
              public health, including distributing face masks capable of
              filtering out PM2.5 and setting up roadside emission check-points
              to limit black exhaust fumes.
              <br />
              <small className="text-gray-500">
                Retrieved from:
                https://www.channelnewsasia.com/asia/thailand-chiang-mai-poor-air-quality-masks-3336571
              </small>
            </p>
          </div>
          <ArticleLates />
        </article>
        <Comments />
      </ContentLayout>
    </MainLayout>
  );
};

export default ArticleDetails;
