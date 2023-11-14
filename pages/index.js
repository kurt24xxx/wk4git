import Link from 'next/link';
import Layout from '../components/layout';
import{ getSortedList } from '../lib/data';

export async function getStaticProps(){
  const allData = getSortedList();
  return { 
    props: {allData}
    
  };
}



export default function Home( { allData }) {
  return (
    <Layout home>
    <h1>Hello</h1>
    <div className="list-group">
      { allData.map(
      ({id, name}) => (
        <Link key={id} href={`/${id}`}
          className="list-group-item">
          {name}
        </Link>
          
      )
      )
        
      }
    </div>
    </Layout>
  );
}




     
