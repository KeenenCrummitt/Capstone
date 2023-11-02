import PropTypes from "prop-types";

const SkillCard = ({ icon, title, text }) => {
  return (
    <div className="group bg-white sm:cursor-pointer relative group w-full flex items-center gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200">
      <div className="flex w-24 h-24 group-hover:scale-105">{icon()}</div>
      <div className="">
        <h6 className="pl-10 text-xl text-slate-600">{title}</h6>
        <p className="italic text-sm pl-10 text-slate-400">{text}</p>
      </div>
      <p className="absolute text-slate-500 right-4 top-0">&#x279E;</p>
    </div>
  );
};

SkillCard.propTypes = {
  icon: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default SkillCard;
