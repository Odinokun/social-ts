import React from 'react';

import s from './post.module.css';

type PostPropsType = {
    message: string,
    likes: number
}

function Post(props: PostPropsType) {
    return (
        <div className={s.post}>
            <div className={s.ava}>
                <img src="https://source.unsplash.com/1600x900/?people,man"
                     alt="ava"/>
            </div>

            <h3>{props.message}</h3>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Adipisci dolores magnam non pariatur quos, similique soluta ut
                voluptatibus? Accusamus aliquid atque
                consectetur consequatur cum distinctio dolores ducimus eius
                error et, illum impedit ipsa iste laborum, minima molestiae
                mollitia nam natus necessitatibus neque
                non obcaecati pariatur perferendis possimus praesentium
                provident quam ratione repellendus reprehenderit sapiente sed
                similique sint tempore vel voluptate
                voluptatem voluptates. Assumenda consectetur deleniti dolores
                dolorum enim et exercitationem fuga, id, illo laborum maxime
                officiis quae quo repellat
                repudiandae saepe tempora. Accusamus, accusantium earum
                excepturi explicabo fugiat necessitatibus nihil velit. Deserunt
                necessitatibus ut vel. Accusamus alias
                aliquid animi architecto deleniti earum error fugiat id
                molestias nemo nisi nobis numquam perferendis provident quidem
                soluta sunt, tempora! A alias culpa,
                cupiditate deleniti ex, ipsum iste maiores, molestias non
                numquam omnis reiciendis repellendus tempora ullam velit. Animi,
                beatae corporis facere laborum magni
                optio perferendis. Aperiam autem corporis deserunt ex explicabo
                id itaque neque nostrum officiis pariatur possimus quas
                recusandae reiciendis sequi similique
                tempora totam voluptate, voluptatum. Accusamus earum esse
                facilis nulla voluptate! Aliquam aperiam aspernatur dolorem
                impedit iure, modi officiis qui tenetur
                totam voluptatibus. Aliquid delectus deleniti dicta dolorem,
                enim, eos fugit illum officia omnis placeat quia quo quos sint
                ut voluptatum.</p>

            <div className={s.footer}>
                <b><i>like </i></b>
                <b><i>dislike </i></b>
                <b><i>{props.likes} </i></b>
            </div>
        </div>
    );
}

export default Post;
