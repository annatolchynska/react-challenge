import css from './css/Sidebar.module.css';

export default function Sidebar(){
return (
    <div className={css.sidebar}>
<a>MyPhotos</a>
<a>MyIllustrations</a>
<a>MyPaintings</a>
    </div>
);
}