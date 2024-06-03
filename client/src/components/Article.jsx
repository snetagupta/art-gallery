import react from "react";
import article from "../assets/article/article.jpg";
import articleicon from "../assets/article/articleicon.png";

const Article = () => {
  return (
    <div className="py-8 px-40">
        <div className="flex items-center justify-between gap-10 border border-gray-200 rounded-md p-5">
      <div>
        <img className="w-[400px]" src={article} />
      </div>
      <div className="flex flex-col gap-5">
        <img className="w-[50px]" src={articleicon} />
        <a href="www.google.com" className="text-3xl underline">
          Playbook, where ‘Pinterest meets Dropbox’ for designers, closes on
          $18M in funding
        </a>
      </div>
      </div>
    </div>
  );
};
export default Article;
