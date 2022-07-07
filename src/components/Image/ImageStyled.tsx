import styled from "styled-components";

const ImageThumbnailStyled = styled.img<ImageProps>`
    border-radius: ${(props) => props.borderRadius || "0"};
    object-fit: cover;
`;

export interface ImageProps {
    src: string;
    alt?: string;
    width: string;
    height?: string;
    borderRadius?: string;
    margin?: string;
}

const Image = ({
    src,
    width,
    height,
    borderRadius,
    alt = "image",
    margin,
}: ImageProps) => {
    return (
        <ImageThumbnailStyled
            src={src}
            alt={alt}
            width={width}
            height={height}
            borderRadius={borderRadius}
            margin={margin}
        />
    );
};

export default Image;
