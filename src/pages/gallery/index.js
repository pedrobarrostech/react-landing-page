import React from 'react';
import Layout from '../../components/Layout/LayoutComponent';
import s from './gallery.css';

class GalleryPage extends React.Component {

  componentDidMount() {
    document.title = 'Artwork Tattoo - Studio';
  }

  render() {
    return (
      <Layout className={s.content}>
        <h1>Galeria</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nam molestie, tellus et condimentum molestie, quam turpis porta dui,
          id tincidunt enim lorem et elit. Phasellus maximus vehicula lectus eget molestie.
          Aenean fermentum tortor placerat feugiat porttitor. Vestibulum eu varius metus.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nam molestie, tellus et condimentum molestie, quam turpis porta dui,
          id tincidunt enim lorem et elit. Phasellus maximus vehicula lectus eget molestie.
          Aenean fermentum tortor placerat feugiat porttitor. Vestibulum eu varius metus.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nam molestie, tellus et condimentum molestie, quam turpis porta dui,
          id tincidunt enim lorem et elit. Phasellus maximus vehicula lectus eget molestie.
          Aenean fermentum tortor placerat feugiat porttitor. Vestibulum eu varius metus.
        </p>

        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

      </Layout>
    );
  }

}

export default GalleryPage;
