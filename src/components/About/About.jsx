import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-12 px-4 lg:px-0">
        <h1 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-8 text-center">About Us</h1>
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
            <img src="https://via.placeholder.com/800x600" alt="About Us" className="rounded-lg shadow-lg" />
          </div>
          <div className="lg:w-1/2">
            <p className="text-lg text-gray-700 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis efficitur eros non ex blandit, nec rhoncus nisl faucibus. Nullam dignissim, sapien ut interdum varius, nisi elit lacinia elit, ac consequat quam dolor et ante. Vivamus quis sem nec lorem hendrerit euismod. Suspendisse potenti. In hac habitasse platea dictumst. Nam id posuere odio. Integer nec aliquam eros, eget tincidunt est. Integer vulputate leo ut massa ullamcorper lobortis.
            </p>
            <p className="text-lg text-gray-700">
              Fusce interdum, dolor ac molestie laoreet, ipsum est molestie libero, ac tincidunt justo dui ut ex. Nam eleifend est at aliquet sodales. Sed quis arcu sed tortor aliquet lobortis. Fusce fringilla ex a est fermentum vehicula. Curabitur id felis vel turpis consectetur fermentum. Cras efficitur, lorem et convallis placerat, leo erat vehicula risus, at posuere nulla justo sit amet neque.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
