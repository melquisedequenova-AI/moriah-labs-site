# 🚀 Deploy — Moriah Labs Site

## 1. Criar repositório no GitHub

```bash
cd moriah-labs-site

# Login no GitHub (primeira vez)
gh auth login

# Criar repositório público e fazer push
gh repo create moriah-labs-site \
  --public \
  --description "Site institucional da Moriah Labs AI" \
  --push \
  --source .
```

## 2. Vincular ao Vercel (via dashboard)

1. Acesse **https://vercel.com/new**
2. Clique em **"Import Git Repository"**
3. Selecione `melquisedequenova-AI/moriah-labs-site`
4. Configure:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Team:** melquisedequenova-ais-projects
5. Clique em **Deploy**

---
Deploy automático a cada `git push` na branch `main`.
