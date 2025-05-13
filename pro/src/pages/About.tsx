import React from 'react';
import { Award, Users, BookOpen, Lightbulb, ArrowRight } from 'lucide-react';

// --- About Section ---
const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-6">
              About PlantMedicine
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              PlantMedicine was created by a team of botanists, herbalists, and technology experts 
              passionate about making natural medicine more accessible to everyone. Our mission is to 
              bridge the gap between traditional plant knowledge and modern technology.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Using advanced image recognition and machine learning, we've developed a system that can 
              identify thousands of medicinal plants with high accuracy. Our database includes detailed 
              information about each plant's properties, uses, and safety considerations compiled from 
              scientific research and traditional knowledge.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <Feature icon={<Award />} title="Expert Verified" description="All plant information reviewed by botanists and herbalists" />
              <Feature icon={<Users />} title="Global Community" description="Join thousands of plant enthusiasts worldwide" />
              <Feature icon={<BookOpen />} title="Extensive Database" description="Over 10,000 medicinal plants and growing" />
              <Feature icon={<Lightbulb />} title="Educational Focus" description="Learn about traditional and modern plant uses" />
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/6157229/pexels-photo-6157229.jpeg" 
                alt="Herbalist examining medicinal plants"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-emerald-100 rounded-2xl -z-10"></div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-emerald-200 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Feature = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="flex items-start">
    <div className="w-10 h-10 text-emerald-600 mr-3 flex-shrink-0">{icon}</div>
    <div>
      <h3 className="font-semibold text-gray-800 mb-1">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </div>
);

// --- Article Card ---
interface ArticleCardProps {
  title: string;
  excerpt: string;
  image: string;
  category: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ title, excerpt, image, category }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-5">
        <span className="inline-block px-3 py-1 text-xs font-medium bg-emerald-100 text-emerald-800 rounded-full mb-3">
          {category}
        </span>
        <h3 className="text-xl font-semibold text-gray-800 mb-3 line-clamp-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
        <a 
          href="#" 
          className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-medium"
        >
          Read Article
          <ArrowRight size={16} className="ml-1" />
        </a>
      </div>
    </div>
  );
};

// --- Learn Section ---
const LearnSection: React.FC = () => {
  const articles = [
    {
      title: "The Science Behind Herbal Medicine: Evidence-Based Benefits",
      excerpt: "Explore the scientific research supporting the efficacy of traditional herbal remedies and how they complement modern medicine.",
      image: "https://images.pexels.com/photos/6629602/pexels-photo-6629602.jpeg",
      category: "Research"
    },
    {
      title: "Growing Your Own Medicinal Herb Garden: A Beginner's Guide",
      excerpt: "Learn how to cultivate common medicinal herbs at home, from seed selection to harvesting and proper storage techniques.",
      image: "https://images.pexels.com/photos/4505161/pexels-photo-4505161.jpeg",
      category: "Gardening"
    },
    {
      title: "Traditional Wisdom: Indigenous Plant Medicine Practices",
      excerpt: "Discover ancient healing traditions from indigenous cultures around the world and their sustainable approach to plant medicine.",
      image: "https://images.pexels.com/photos/5797899/pexels-photo-5797899.jpeg", 
      category: "Culture"
    }
  ];

  return (
    <section id="learn" className="py-20 bg-emerald-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-12 text-center">Learn More</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Main Component (Optional Export if you're combining both) ---
const MainPage: React.FC = () => {
  return (
    <>
      <AboutSection />
      <LearnSection />
    </>
  );
};

export default MainPage;
