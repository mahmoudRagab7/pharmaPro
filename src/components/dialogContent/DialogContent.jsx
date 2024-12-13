import "./dialogContent.css";

import * as React from "react";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import SearchIcon from "@mui/icons-material/Search";

import Accordion from "@mui/material/Accordion";
// import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const medicalData = [
  {
    id: 1,
    tradeName: "Panadol",
    activeIngredient: "Paracetamol",
    genericName: "Acetaminophen",
    class: "Analgesic and Antipyretic",
    mechanismOfAction:
      "Inhibits prostaglandin synthesis in the central nervous system and blocks pain impulse generation.",
    indications: "Relief of mild to moderate pain and reduction of fever.",
    dose: "Adults and children over 12 years: 500 mg to 1000 mg every 4 to 6 hours as needed, not exceeding 4000 mg in 24 hours.",
    drugInteractions: "May interact with warfarin and other anticoagulants.",
    contraindications: "Severe liver impairment or active liver disease.",
    pregnancyAndBreastfeeding:
      "Generally considered safe when used as directed; consult a healthcare provider.",
    sideEffects:
      "Possible side effects include nausea, rash, and headache; severe reactions are rare.",
    foodInteractions:
      "No significant food interactions; avoid excessive alcohol consumption.",
  },
  {
    id: 2,
    tradeName: "Advil",
    activeIngredient: "Ibuprofen",
    genericName: "Ibuprofen",
    class: "Nonsteroidal Anti-inflammatory Drug (NSAID)",
    mechanismOfAction:
      "Inhibits cyclooxygenase (COX-1 and COX-2) enzymes, reducing prostaglandin synthesis.",
    indications: "Relief of mild to moderate pain, inflammation, and fever.",
    dose: "Adults: 200-400 mg every 4 to 6 hours as needed; maximum 3200 mg per day.",
    drugInteractions:
      "May interact with aspirin, anticoagulants, and antihypertensives.",
    contraindications:
      "Active gastrointestinal bleeding, history of NSAID-induced asthma.",
    pregnancyAndBreastfeeding:
      "Use with caution; consult a healthcare provider.",
    sideEffects:
      "Gastrointestinal upset, dizziness, and potential for increased blood pressure.",
    foodInteractions:
      "Taking with food may reduce gastrointestinal discomfort.",
  },
  {
    id: 3,
    tradeName: "Lipitor",
    activeIngredient: "Atorvastatin",
    genericName: "Atorvastatin",
    class: "HMG-CoA Reductase Inhibitor (Statin)",
    mechanismOfAction:
      "Inhibits HMG-CoA reductase, reducing cholesterol synthesis.",
    indications:
      "Hypercholesterolemia and prevention of cardiovascular disease.",
    dose: "10 to 80 mg once daily.",
    drugInteractions:
      "Interacts with certain antibiotics, antifungals, and other cholesterol-lowering medications.",
    contraindications:
      "Active liver disease, unexplained persistent elevations of serum transaminases.",
    pregnancyAndBreastfeeding:
      "Contraindicated during pregnancy and breastfeeding.",
    sideEffects:
      "Muscle pain, liver enzyme abnormalities, and digestive problems.",
    foodInteractions:
      "Grapefruit juice may increase drug levels; avoid excessive consumption.",
  },
  {
    id: 4,
    tradeName: "Zoloft",
    activeIngredient: "Sertraline",
    genericName: "Sertraline",
    class: "Selective Serotonin Reuptake Inhibitor (SSRI)",
    mechanismOfAction:
      "Inhibits reuptake of serotonin, increasing its availability in the brain.",
    indications:
      "Depression, anxiety disorders, and obsessive-compulsive disorder.",
    dose: "50 mg once daily, adjustable up to 200 mg per day.",
    drugInteractions:
      "Interacts with MAO inhibitors, other SSRIs, and anticoagulants.",
    contraindications: "Concurrent use with MAO inhibitors.",
    pregnancyAndBreastfeeding:
      "Use only if potential benefit justifies the risk; consult a healthcare provider.",
    sideEffects: "Nausea, insomnia, sexual dysfunction, and dry mouth.",
    foodInteractions: "Can be taken with or without food.",
  },
  {
    id: 5,
    tradeName: "Ventolin",
    activeIngredient: "Albuterol",
    genericName: "Salbutamol",
    class: "Short-Acting Beta-2 Agonist",
    mechanismOfAction:
      "Stimulates beta-2 adrenergic receptors, leading to bronchodilation.",
    indications: "Relief and prevention of bronchospasm in asthma and COPD.",
    dose: "2 inhalations every 4 to 6 hours as needed.",
    drugInteractions: "May interact with beta-blockers and diuretics.",
    contraindications:
      "Hypersensitivity to albuterol or any component of the formulation.",
    pregnancyAndBreastfeeding:
      "Generally considered safe; consult a healthcare provider.",
    sideEffects: "Tremor, nervousness, and increased heart rate.",
    foodInteractions: "No significant food interactions.",
  },
  {
    id: 6,
    tradeName: "Glucophage",
    activeIngredient: "Metformin",
    genericName: "Metformin",
    class: "Biguanide",
    mechanismOfAction:
      "Decreases hepatic glucose production and increases insulin sensitivity.",
    indications: "Type 2 diabetes mellitus.",
    dose: "500 mg twice daily or 850 mg once daily, adjustable up to 2000 mg per day.",
    drugInteractions: "May interact with alcohol and iodinated contrast media.",
    contraindications: "Severe renal impairment, metabolic acidosis.",
    pregnancyAndBreastfeeding: "Consult a healthcare provider.",
    sideEffects: "Gastrointestinal upset and risk of lactic acidosis.",
    foodInteractions:
      "Taking with meals can reduce gastrointestinal side effects.",
  },
  {
    id: 7,
    tradeName: "Norvasc",
    activeIngredient: "Amlodipine",
    genericName: "Amlodipine",
    class: "Calcium Channel Blocker",
    mechanismOfAction:
      "Inhibits calcium ion influx into vascular smooth muscle and cardiac muscle.",
    indications: "Hypertension and angina.",
    dose: "5 to 10 mg once daily.",
    drugInteractions:
      "May interact with other antihypertensives and CYP3A4 inhibitors.",
    contraindications: "Severe hypotension.",
    pregnancyAndBreastfeeding:
      "Use only if clearly needed; consult a healthcare provider.",
    sideEffects: "Edema, dizziness, and palpitations.",
    foodInteractions: "No significant food interactions.",
  },
  {
    id: 8,
    tradeName: "Synthroid",
    activeIngredient: "Levothyroxine",
    genericName: "Levothyroxine",
    class: "Thyroid Hormone",
    mechanismOfAction:
      "Replaces deficient thyroxine, normalizing metabolic activity.",
    indications: "Hypothyroidism.",
    dose: "Individualized; typically 25-300 mcg daily.",
    drugInteractions: "Interacts with calcium, iron, and antacids.",
    contraindications: "Uncorrected adrenal insufficiency.",
    pregnancyAndBreastfeeding: "Safe during pregnancy and breastfeeding.",
    sideEffects: "Hair loss, hyperthyroidism symptoms if overdosed.",
    foodInteractions: "Absorption can be reduced by certain foods.",
  },
  {
    id: 9,
    tradeName: "Xanax",
    activeIngredient: "Alprazolam",
    genericName: "Alprazolam",
    class: "Benzodiazepine",
    mechanismOfAction:
      "Enhances the effect of GABA, producing a calming effect.",
    indications: "Anxiety and panic disorders.",
    dose: "0.25-0.5 mg three times daily.",
    drugInteractions: "Interacts with CNS depressants and alcohol.",
    contraindications:
      "Acute narrow-angle glaucoma, severe respiratory depression.",
    pregnancyAndBreastfeeding:
      "Not recommended; consult a healthcare provider.",
    sideEffects: "Drowsiness, dizziness, and dependency risk.",
    foodInteractions: "Avoid alcohol.",
  },
  {
    id: 10,
    tradeName: "Plavix",
    activeIngredient: "Clopidogrel",
    genericName: "Clopidogrel",
    class: "Antiplatelet",
    mechanismOfAction: "Inhibits platelet aggregation.",
    indications: "Prevention of blood clots in cardiovascular conditions.",
    dose: "75 mg once daily.",
    drugInteractions: "Interacts with NSAIDs and anticoagulants.",
    contraindications: "Active bleeding.",
    pregnancyAndBreastfeeding:
      "Use with caution; consult a healthcare provider.",
    sideEffects: "Bleeding, rash, and gastrointestinal discomfort.",
    foodInteractions: "Avoid excessive alcohol.",
  },
];

const accordionCards = [
  {
    id: 1,
    cardTitle: "Trade Name",
    key: "tradeName",
  },
  {
    id: 2,
    cardTitle: "Active Ingredient",
    key: "activeIngredient",
  },
  {
    id: 3,
    cardTitle: "Generic Name",
    key: "genericName",
  },
  {
    id: 4,
    cardTitle: "Class",
    key: "class",
  },
  {
    id: 5,
    cardTitle: "Mechanism of Action",
    key: "mechanismOfAction",
  },
  {
    id: 6,
    cardTitle: "Indications",
    key: "indications",
  },
  {
    id: 7,
    cardTitle: "Dose (Adult, Child, Elderly People)",
    key: "dose",
  },
  {
    id: 8,
    cardTitle: "Drug, Drug-Interaction",
    key: "drugInteractions",
  },
  {
    id: 9,
    cardTitle: "Contradictions",
    key: "contraindications",
  },
  {
    id: 10,
    cardTitle: "Pregnancy And Breastfeeding",
    key: "pregnancyAndBreastfeeding",
  },
  {
    id: 11,
    cardTitle: "Side Effects",
    key: "sideEffects",
  },
  {
    id: 12,
    cardTitle: "Food Interactions",
    key: "foodInteractions",
  },
];

export default function DialogContentModal({ handleClose }) {
  const [alignment, setAlignment] = React.useState("Trade");
  const [searchValue, setSearchValue] = React.useState("");
  const [filteredData, setFilteredData] = React.useState([]);

  const handleChangeToggle = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  const handleSearch = () => {
    const searchKey =
      alignment === "Trade"
        ? "tradeName"
        : alignment === "Active"
        ? "activeIngredient"
        : "genericName";

    const result = medicalData.filter((item) =>
      item[searchKey]?.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(result);
  };

  const renderAccordionCards = (data) => {
    if (data.length === 0) {
      return <p>No results found</p>;
    }

    return data.map((item) => (
      <div key={item.id}>
        {accordionCards.map((card) => (
          <Accordion key={card.id}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id={`panel-${card.id}-header`}
            >
              {card.cardTitle}
            </AccordionSummary>
            <AccordionDetails>{item[card.key] || "N/A"}</AccordionDetails>
          </Accordion>
        ))}
      </div>
    ));
  };

  return (
    <div className="dialogContent" style={{}}>
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        Searching By {alignment} Name
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={(theme) => ({
          position: "absolute",
          right: 8,
          top: 8,
          color: theme.palette.grey[500],
        })}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent dividers>
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChangeToggle}
          aria-label="Platform"
          sx={{ width: "100%", justifyContent: "center" }}
        >
          <ToggleButton value="Trade">Trade</ToggleButton>
          <ToggleButton value="Active">Active</ToggleButton>
          <ToggleButton value="Generic">Generic</ToggleButton>
        </ToggleButtonGroup>
        <div
          className="scanBarcode"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "10px 0",
          }}
        >
          <p className="scanBarcodeText">Scan Barcode</p>
          <QrCodeScannerIcon
            className="scanBarcodeIcon"
            style={{ cursor: "pointer" }}
          />
        </div>

        <div className="searchDialogContainer">
          <div className="searchDialogInpAndIcon">
            <input
              type="text"
              className="searchDialogInp"
              placeholder="Search Here"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <SearchIcon className="searchDialogIcon" />
          </div>

          <div className="searchDialogBtnContainer">
            <Button
              className="searchDialogBtn"
              variant="contained"
              onClick={handleSearch}
              disabled={!searchValue.trim()}
            >
              Search
            </Button>
          </div>
        </div>

        <div className="resultContainer">
          {renderAccordionCards(filteredData)}
        </div>
      </DialogContent>
      {/* <DialogActions>
        <Button autoFocus onClick={handleClose}>
          Save changes
        </Button>
      </DialogActions> */}
    </div>
  );
}
