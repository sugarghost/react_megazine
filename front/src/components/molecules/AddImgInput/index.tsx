import React, {useState} from "react";
import Figure from "@atoms/Figure";
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const StyledImgInputWrap = styled.div`
  padding-bottom: 25%;
  position: relative;
  width: 100%;
  line-height: 0;
  font-size: 0;
  height: 0;
`
const StyledFigureArea = styled.div`
 position:absolute;
  display: flex;
  align-items: stretch;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  figure {
    position: relative;
    margin-right:10px;
    margin-bottom:8px;
    padding-bottom:0;
    img {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      border: 1px dashed #ccc;
    }
    &:nth-child(4){
      margin-right:0;
    }
  }
  label{
    width:25% !important;
    margin:0;
    margin-bottom:8px;
    padding-bottom:0;
  }
`
const StyledNoImg = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 25%;
  label {
    position: absolute;
    margin: 0;
    width: 100%;
    height:100%;
    padding:0;
  }
`

const StyledInputMessage = styled.label`
  position: relative;
  padding-bottom: 25%;
  width: 25%;
  margin: 5px;
  border: 1px dashed #ccc;
  background:#efefef;
  cursor:pointer;
  p {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 24px;
    color: #555;
    text-align: center;
  }

  span {
    margin-top: 10px;
    font-size: 14px;
    display: block;
    line-height:1.4;
  }

  input {
    position: absolute;
    text-indent: -1000000px
  }
`
function AddImgInput({
                       setImgFiles,
                       maxNum
                     }: { setImgFiles: React.Dispatch<React.SetStateAction<File[]>>, maxNum: number }) {
  const [imgUrls, setImgUrls] = useState<string[]>([])
  const imgFileForm = /(.*?)\.(jpg|jpeg|png)$/;
  const onSaveFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadFiles = Array.prototype.slice.call(e.target.files);
    if (imgUrls.length + 1 > maxNum) {
      alert(`최대 ${maxNum}개 까지 첨부할 수 있습니다.`)
      return false
    }
    if (!uploadFiles[0].name.match(imgFileForm)) {
      alert(`jpg,jpeg,png 확장자만 첨부할 수 있습니다.`)
      return false
    }
    uploadFiles.forEach((uploadFile) => {
      const imgUrl = URL.createObjectURL(uploadFile)
      setImgUrls(urls => [...urls, imgUrl])
      setImgFiles(imgs => [...imgs, uploadFile])
    });
  };

  return (
    <StyledImgInputWrap>
      {
        imgUrls.length > 0
          ?
          <StyledFigureArea>
            {imgUrls.map((img: string) => <Figure key={img} alt={img} src={img} width="25%"/>)}
            {
              imgUrls.length < maxNum
              &&
              <StyledInputMessage>
                <input
                  type="file" multiple onChange={onSaveFiles} accept="image/*"/>
                <p><FontAwesomeIcon icon="file-arrow-up"/><span>이미지 추가</span></p>
              </StyledInputMessage>
            }
          </StyledFigureArea>
          :
          <StyledNoImg>
            <StyledInputMessage>
              <input type="file" multiple onChange={onSaveFiles} accept="image/*"/>
              <p><FontAwesomeIcon icon="file-arrow-up"/><span>이미지를 첨부해주세요</span></p>
            </StyledInputMessage>
          </StyledNoImg>
      }

    </StyledImgInputWrap>
  );
}

export default AddImgInput
