import React from "react";
import { useEffect } from "react";

const MessagefromMD = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="mt-20 flex flex-col justify-center items-center">
      <div className="mt-12">
        <img
          justify-center
          items-center
          src="https://www.shutterstock.com/image-photo/closeup-young-caucasian-businessman-showing-260nw-320402378.jpg"
          alt=""
        />
      </div>
      <div
        className="rounded lg:mx-32 mt-6 font-light"
        style={{ boxShadow: "1px 1px 10px lightblue" }}
      >
        <p className="p-6 text-justify">
          Software development managers play a crucial role in the success of a
          development project. Today we will review the full list of
          responsibilities and scopes of this position. In the age of
          technology, the pace of innovation is dizzying. Impressive innovations
          are popping up left and right in the business world. One risk of a
          tech business, especially for startups, is the mismanagement of team
          resources. A single misstep could ruin the product or company. You
          need someone to help manage the project from its conception to
          release. That is exactly what software development managers do.
        </p>
        <p className="p-6 text-justify">
          Essentially, if you want to build a software product, you need experts
          to do it. A software development team is responsible for the design,
          development, delivery, and maintenance of your project. Some companies
          hire a tech team to introduce a product to the market. While others
          hire them to improve their internal processes. When building your
          software development team, you have to assess what kind of project you
          envision carefully. For example, if you want to create a simple
          website and an app for your services, you’ll need a developer and a
          graphic designer at the very least. For a larger project that includes
          creating your brand, you’ll need to employ a complete development
          team. Development teams commonly include many different positions:
          <ul className="list-disc pl-12">
            <li>Frontend developer</li>
            <li>Backend developer</li>
            <li>Quality Assurance</li>
            <li>Engineer Project Manage</li>
          </ul>
        </p>
        <p className="p-6 text-justify">
          A software development manager interfaces between the technical team
          and the product management team and company leadership. It is their
          job to translate product requirements into work items that the team
          can perform. Additionally, they ensure that the team accomplishes
          their tasks. Software development requires a lot of coordination and
          collaboration. It is a team sport that calls for excellent leadership.
        </p>
      </div>
    </div>
  );
};

export default MessagefromMD;
