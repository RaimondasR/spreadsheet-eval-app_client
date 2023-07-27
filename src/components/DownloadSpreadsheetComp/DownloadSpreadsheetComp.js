import React, { useRef, useState } from "react";
import { useEffect } from "react";
import http from "../../plugins/http";
import styles from "./DownloadSpreadsheetComp.module.css";

const DownloadSpreadsheetComp = () => {

  const [downloading, setDownloading] = useState(false);
  const [message, setMessage] = useState(null);

  async function downloadSpreadsheet() {
    setDownloading(true);
    console.log("Funkcija downloadSpreadsheet() pradeda veikti.");
    fetch("https://www.wix.com/_serverless/hiring-task-spreadsheet-evaluator/sheets")
        .then(res => res.json())
        .then(data => {
            console.log("Data = sheets :", data);
        })

  }

  return (
    <div className={styles.comp}>
        <div className={styles.div_wrap}>

        <div className={styles.page_name_div}>
            <h1>DOWNLOAD SPREADSHEET PAGE</h1>
        </div>
        {/* <div className={styles.div1}>
                <b>DOWNLOAD SPREADSHEET FOR EVALUATION FORM</b>
            </div> */}

        <div className={styles.div3}>
            <h4>By Pressing Button You Will Download a Spreadsheet for Evaluation</h4>
        </div>

        {downloading ? (
            <div className={styles.btn_div}>Downloading ...</div>
        ) : (
            <div className={styles.btn_div}>
            <button  onClick={downloadSpreadsheet}>DOWNLOAD SPREADSHEET</button>
            </div>
        )}

        {message && <div className={styles.msg_div}>{message}</div>}

        </div>
    </div>
    );  
}

export default DownloadSpreadsheetComp;