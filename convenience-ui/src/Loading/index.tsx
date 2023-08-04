import React, {FC, memo } from 'react';
import css from './Loading.module.less';
import { LoadingProps} from './interface';
const Loading: FC<LoadingProps> = memo((props) => {
    const { text, children, mask, loading, all } = props;
    return (
        <div className={[mask === 'white' ? css.white : css.black, loading === true ? css.show : css.hidden, all === true ? css.all : css.single].join(' ')}>
            <div className={css.content}>
                {children ? children[0] : <div className={css.icon}></div>}
                {text ? text : ''}
            </div>
        </div>

    );
});
export default Loading;
