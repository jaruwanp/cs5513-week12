import Head from 'next/head';
import Layout from '../components/layout';
import { getAllIds, getData } from '../lib/data';
import Link from 'next/link';

export async function getStaticProps({ params }) {
  const itemData = await getData(params.id);
  // console.log(itemData);
  return {
    props: {
      itemData
    }
  };
}

export async function getStaticPaths() {
  const paths = await getAllIds();
  return {
    paths,
    fallback: false
  };
}

export default function Entry({ itemData }) {
  var wp_link = 'https://dev-cs55-13-week11.pantheonsite.io/'+ itemData.post_date.substring(0, 10).replace('-','/').replace('-','/') + '/' + itemData.post_name;
  return (
    <Layout>
      <article className="card col-12">
        <div className="card-body">
          <h3 className="card-title">{itemData.post_title}</h3>
           <h4>Post Name:{itemData.post_name}, Post date: {itemData.post_date}</h4>
          <h4>
           View content on Wordpress: {' '}
           <Link href={wp_link}>
            <a target='_blank'>{wp_link}</a>
          </Link>
          </h4>
          <br/>
          <p className="card-text">{itemData.post_content}</p>
          
        </div>
      </article>
    </Layout>
  );
}