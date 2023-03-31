import "./sampleresume.css";

const SampleResume = (props) => {
  const { message } = props;
  console.log(message);

  return (
    <div>
      <img
        alt="img"
        className="my-image"
        src="https://d25zcttzf44i59.cloudfront.net/it-resume-example.png"
      />
    </div>
  );
};

export default SampleResume;
