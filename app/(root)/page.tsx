import SearchForm from "../../components/SearchForm";
import StartupCard from "../../components/StartupCard";
import { StartupTypeCard } from "../(root)/types";
import { title } from "process";


async function Home({searchParams}:{
  searchParams: Promise<{
    query?: string;
  }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {_createdAt: new Date().toISOString(),
      views:55,
      author : {_id:1 , name:"Ayman Ahmed Khan"},
      _id:1,
      description:'A platform for connecting entrepreneurs with investors',
      image:'https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category:'Robots',
      title:'We Robots'

  }]
  return (
      <>
        <section className="pink_container">
            <h1 className="heading">
              Pitch Your Startup, <br/>
              Connect with Entrepreneurs
            </h1>
            <p className="sub-heading !max-w-3xl">
              Submit Ideas,Vote on Pitches,and Get Noticed in Virtual Competitions.
            </p>
            <SearchForm query = {query}/>

        </section>

        <section className="section_container">
          <p className="text-30-semibold">
            {query ? `Search Results for "${query}"` : "All Startups"}

          </p>
          <ul className="mt-7 card_grid">
            {
              posts?.length>0?(
                posts.map((post:StartupTypeCard,index:number)=>(
                  <StartupCard key={post?._id} post={post} />
                ))

              ):(
                <p className="no-results">
                  No startups found
                </p>
              )
            }
            
          </ul>

        </section>
        
      </>
    );
}


export default Home;