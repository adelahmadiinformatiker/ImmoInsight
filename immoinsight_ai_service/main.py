from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from app.service import analyze_text, analyze_house_data
from app.schemas import TextRequest, TextResponse, HouseDataRequest, HouseAnalysisResponse
import uvicorn

app = FastAPI(
    title="ImmoInsight AI Service",
    description="AI/ML Service für Immobilienanalyse",
    version="1.0.0"
)

# CORS Configuration für Frontend-Integration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "ImmoInsight AI Service ist aktiv", "version": "1.0.0"}

@app.get("/health")
def health_check():
    return {"status": "healthy", "service": "ai"}

@app.post("/analyze", response_model=TextResponse)
def analyze(req: TextRequest):
    """
    Analysiert Text mit AI-Modell
    """
    try:
        result = analyze_text(req.text)
        return TextResponse(summary=result)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Analyse fehlgeschlagen: {str(e)}")

@app.post("/analyze/house", response_model=HouseAnalysisResponse)
def analyze_house(req: HouseDataRequest):
    """
    Analysiert Immobiliendaten mit AI
    """
    try:
        result = analyze_house_data(req)
        return HouseAnalysisResponse(
            market_analysis=result["market_analysis"],
            price_prediction=result["price_prediction"],
            recommendations=result["recommendations"]
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Haus-Analyse fehlgeschlagen: {str(e)}")

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8001) 