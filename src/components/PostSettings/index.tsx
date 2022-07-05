import { useSelector } from "react-redux";
import "./PostSetting.scss";
import "antd/dist/antd.min.css";
import { useEffect, useState } from "react";
import { dataFake } from "../../dataFake/dataFake";
import ListImage from "./ListImage";
import Description from "./Description";
import DateOfPosting from "./DateOfPosting";
import Tags from "./Tags";

const PostSetting = () => {
    const { visible, dateSetting } = useSelector(
        (state: any) => state.post.data
    );
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        const res = dataFake.filter((_: any) => _.id === dateSetting);
        setData(res[0]);
    }, [dateSetting]);

    return (
        <div className={visible ? "postSetting active" : "postSetting"}>
            {data && (
                <div className="container">
                    <h2>Post Setting</h2>
                    <ListImage listImage={data.img} />
                    <Description description={data.desc} />
                    <DateOfPosting dateOfPosting={data.dateOfPosting} />
                    <Tags tags={data.tags} />
                </div>
            )}
        </div>
    );
};

export default PostSetting;
