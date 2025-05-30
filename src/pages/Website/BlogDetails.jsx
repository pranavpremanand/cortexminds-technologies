import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { BlogItem, blogs } from "./Blogs";
import Header from "../../components/Website/Header";
import Footer from "../../components/Footer";
import { LazyLoadImage } from "react-lazy-load-image-component";
import line from "../../assets/images/line.png";
import bannerImg from "../../assets/images/blogs-banner.webp";

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogs.find((item) => item.id === Number(id));
  if (!blog) {
    return <Navigate to="/blogs" />;
  }
  const latestBlogs = blogs.filter((item) => item.id !== Number(id)) || [];
  return (
    <>
      <Header />
      <div className="min-h-[45vh] md:min-h-[70vh] w-full page-banner relative">
        <img
          loading="lazy"
          src={bannerImg}
          width="800"
          height="600"
          className="absolute h-full w-full object-cover object-top z-0"
          alt=""
        />
        <div className="absolute h-full w-full bg-black/40"></div>
        <div className="absolute z-10 py-2 top-[50%] left-1/2 -translate-x-1/2 w-full flex flex-col items-center px-3">
          <h1 data-aos="fade-up" className="heading text-white text-center">
            Blogs
          </h1>
          <div
            data-aos="fade-up"
            className="mt-3 text-base sm:text-xl font-medium px-3 py-2 w-fit flex flex-wrap justify-center text-white items-center gap-1 sm:gap-2"
          >
            <Link to="/">Home</Link>/<Link to="/blogs">Blogs</Link>
          </div>
        </div>
      </div>
      <div className="bg-tertiary/5 relative text-primary_text">
        <div className="wrapper py-[5rem] relative z-10">
          <div className="flex flex-col gap-2 pb-[3rem] p-3 sm:p-5 bg-secondary/10 rounded-xl mb-[3rem]">
            <img
              data-aos="fade-up"
              src={blog.image}
              alt=""
              className="w-full rounded-xl object-cover aspect-[4/3] max-h-[70vh]"
            />
            <div className="flex flex-col gap-2">
              <div
                data-aos="fade-up"
                className="flex justify-between items-center font-light mt-[0.8rem]"
              >
                <div className="rounded-2xl bg-tertiary text-white font-medium px-3 py-1 text-sm w-fit">
                  By Admin
                </div>
                <p className="text-gray-800 text-[.8rem]">12th May 2023</p>
              </div>
              <h4
                data-aos="fade-up"
                className="heading-2_1 leading-tight mt-[1rem] pb-[1.5rem]"
              >
                {/* {blog.title} */}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                iure neque nihil
              </h4>
              {/* <div
                dangerouslySetInnerHTML={{ __html: blog.content }}
                data-aos="fade-up"
                className="hyphen-auto leading-relaxed text-gray-800 border-t border-primary/30 pt-[2rem]"
              ></div> */}
              <p
                data-aos="fade-up"
                className="desc hyphen-auto leading-relaxed text-gray-800"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quaerat, porro excepturi et eos corrupti magnam vel voluptatibus
                aperiam atque voluptatum dolor ullam alias similique hic aliquam
                provident minima cumque doloremque! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quaerat, porro excepturi et eos
                corrupti magnam vel voluptatibus aperiam atque voluptatum dolor
                ullam alias similique hic aliquam provident minima cumque
                doloremque! Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Quaerat, porro excepturi et eos corrupti magnam vel
                voluptatibus aperiam atque voluptatum dolor ullam alias
                similique hic aliquam provident minima cumque doloremque! Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
                porro excepturi et eos corrupti magnam vel voluptatibus aperiam
                atque voluptatum dolor ullam alias similique hic aliquam
                provident minima cumque doloremque! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quaerat, porro excepturi et eos
                corrupti magnam vel voluptatibus aperiam atque voluptatum dolor
                ullam alias similique hic aliquam provident minima cumque
                doloremque!
              </p>
            </div>
          </div>
          {latestBlogs.length > 0 && (
            <div className="pt-[3rem]">
              <div data-aos="fade-up" className="flex items-center gap-3">
                <LazyLoadImage
                  src={line}
                  alt="Decorative line"
                  className="w-[3rem]"
                />
                <h2 className="font-medium text-secondary">Recent Blogs</h2>
              </div>
              <div className="mt-[1.5rem] grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-7">
                {blogs
                  .filter((item) => item.id !== blog.id)
                  .slice(0, 3)
                  .map((item) => (
                    <BlogItem key={item.id} blog={item} />
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogDetails;
