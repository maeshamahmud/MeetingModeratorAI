from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def list_meetings():
    return [{"id": 1, "title": "AI Research Meeting"}]
