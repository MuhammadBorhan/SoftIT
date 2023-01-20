import React from "react";
import Content from "./Content";
import { MdVisibility, MdOutlineEmojiObjects } from "react-icons/md";
import { AiOutlineDribbbleSquare } from "react-icons/ai";

const Goal = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 px-10 my-16 gap-10">
      <Content
        title="Our Mission"
        img="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c29mdHdhcmUlMjBjb21wYW55fGVufDB8fDB8fA%3D%3D&w=1000&q=80"
        desc="Exceed client's expectations by going beyond software to provide best Web solutions that transform data into knowledge, enabling them to solve their problems."
        icon={
          <AiOutlineDribbbleSquare className="w-12 h-12 rounded-full p-2 text-white bg-blue-500 relative left-[45%] bottom-6" />
        }
      />
      <Content
        title="Our Vision"
        img="https://www.saveetha.ac.in/images/sec/2020/content/vision01.jpg"
        desc="A software product vision statement is the overall objective you are aiming for, your reasons for creating your software product. It provides a known direction."
        icon={
          <MdVisibility className="w-12 h-12 rounded-full p-2 text-white bg-blue-500 relative left-[45%] bottom-6" />
        }
      />
      <Content
        title="Our Objective"
        img="https://img.freepik.com/premium-photo/developing-programmer-development-website-design-coding-technologies-working-software-company-office_18497-1234.jpg?w=2000"
        desc="The primary objective of software engineering is to create dependable and effective software. The objective of software engineering is to produce high-quality software."
        icon={
          <MdOutlineEmojiObjects className="w-12 h-12 rounded-full p-2 text-white bg-blue-500 relative left-[45%] bottom-6" />
        }
      />
    </div>
  );
};

export default Goal;
