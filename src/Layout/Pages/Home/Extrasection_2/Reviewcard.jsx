

const Reviewcard = ({review}) => {
    console.log(review._id)
   
    return (
        <div>
        <div className="container flex flex-col w-full max-w-lg p-6 m-10 mx-auto divide-y rounded-md divide-gray-700  text-gray-800">
          <div className="flex justify-between p-4">
            <div className="flex space-x-4 items-center">
              <div>
                <img src={review.reviewer_image} alt="" className="object-cover w-12 h-12 rounded-full bg-gray-800" />
              </div>
              <div>
                <h4 className="font-bold">{review.reviewer_name}</h4>
                {/* <span className="text-xs text-gray-400">2 days ago</span> */}
              </div>
            </div>
           
          </div>
          <div className="p-4 space-y-2 text-lg text-gray-800">
            <p>{review.comment}</p>
           
          </div>
        </div>
      </div>
    );
};

export default Reviewcard;