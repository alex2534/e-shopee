import { useEffect, useState } from "react";
import { GlassDoorData } from "./GlassDoorData";
import { Link } from "react-router-dom";

interface IProps {
  best_places_to_work_awards: [];
  benefits: string;
  business_outlook: string;
  business_outlook_category: string;
  business_outlook_description: string;
  business_outlook_rating_category: string;
  business_outlook_rating: number;
  career_opportunities_rating: number;
  ceo: string;
  ceo_rating: number;
  company_description: string;
  company_id: number;
  company_link: string;
  company_size: string;
  company_size_category: string;
  company_type: string;
  compensation_and_benefits_rating: number;
  competitors: [];
  culture_and_values_rating: number;
  diversity_and_inclusion_rating: number;
  employee_count: number;
  founded: string;
  headquarters: string;
  id: number;
  industry_group: string;
  industry_rating: number;
  linkedin_link: string;
  linkedin_rating: number;
  faq_link: string;
  headquarters_location: string;
  industry: string;
  job_count: number;
  jobs_link: string;
  logo: string;
  name: string;
  office_locations: [];
  rating: number;
  recommend_to_friend_rating: number;
  revenue: string;
  review_count: number;
  reviews_link: string;
  salary_count: number;
  senior_management_rating: number;
  stock: string;
  website: string;
  work_life_balance_rating: number;
  year_founded: string;
  years_in_business: string;
  years_in_industry: string;
  years_in_revenue: string;
  years_in_tenure: string;
  years_in_website: string;
  years_in_wikipedia: string;
  years_in_yelp: string;
  years_in_youtube: string;
  years_in_zomato: string;
  years_in_zumper: string;
  years_in_zwift: string;
  years_in_zynga: string;
}

export default function GlassDoorGetAll() {
  const [allData, setAllData] = useState<IProps[]>([]);

  async function getAll() {
    const data = await GlassDoorData.getAllData();
    setAllData(data);
    const response = data;

    console.log(response);
  }

  return (
    <>
      <h1>GlassDoorGetAll</h1>
      <button onClick={getAll}>CallGlass</button>
      <div>
        {allData.map((value: any) => {
          return (
            <div key={value.company_id} style={{ border: "1px solid black" }}>
              <h3>Company name: {value.name}</h3>
              <br />
              <div>
                jobs_link
                <a href={value.jobs_link}>{value.jobs_link}</a>
              </div>
              <br />
              <div>
                Review Link:
                <a href={value.reviews_link}> {value.reviews_link}</a>
              </div>
              <div>
                Company Link:
                <a href={value.company_link}> {value.company_link}</a>
              </div>
              <div></div>
              <img src={value.logo} />

              <div>Employees count - {value.company_size}</div>
              <div>Category - {value.company_size_category}</div>
              <div>Type - {value.company_type}</div>
              <div>CEO - {value.ceo}</div>
              <div>Benefits - {value.benefits}</div>
              <div>Linkedin rating - {value.linkedIn_rating}</div>
              <div>
                Reviews- <a href={value.reviews_link}>{value.reviews_link}</a>
              </div>
              <div>
                Jobs - <a href={value.jobs_link}>{value.jobs_link}</a>
              </div>
              <div>
                FAQ - <a href={value.faq_link}>{value.faq_link}</a>
              </div>
              <div>website {value.website}</div>
              <div>company_description {value.company_description}</div>
              <div>headquarters {value.headquarters}</div>
              <div>industry_group {value.industry_group}</div>
              <div>founded{value.founded}</div>
              <div>headquarters_location {value.headquarters_location}</div>
              <div>industry {value.industry}</div>
              <div>year_founded{value.year_founded}</div>
              <div>revenue{value.revenue}</div>
              <div>rating {value.rating}</div>
              <div>job_count {value.job_count}</div>
              <div>
                recommend_to_friend_rating {value.recommend_to_friend_rating}
              </div>
              <div>
                diversity_and_inclusion_rating
                {value.diversity_and_inclusion_rating}
              </div>
              <div>
                culture_and_values_rating {value.culture_and_values_rating}
              </div>
              <div>
                career_opportunities_rating {value.career_opportunities_rating}
              </div>
              <div>business_outlook_rating {value.business_outlook_rating}</div>
              <div>
                senior_management_rating {value.senior_management_rating}
              </div>
              <div>
                work_life_balance_rating {value.work_life_balance_rating}
              </div>
              <div>stock {value.stock}</div>
              <div>industry_rating {value.industry_rating}</div>
              <div>rating {value.rating}</div>
              <div>review_count {value.review_count}</div>
              <div>company_size {value.company_size}</div>
              <div>company_size_category {value.company_size_category}</div>
              <div>company_type {value.company_type}</div>
              
            </div>
          );
        })}
      </div>
    </>
  );
}
