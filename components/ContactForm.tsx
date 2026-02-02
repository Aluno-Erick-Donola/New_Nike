'use client';

import { useState } from 'react';
import styles from '@/styles/ContactForm.module.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envio do formulário
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log('Formulário enviado:', formData);
      setSubmitStatus('success');

      // Limpar formulário
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });

      // Resetar mensagem após 3 segundos
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>VAMOS CONVERSAR</h2>
          <p className={styles.subtitle}>
            Tem uma pergunta? Quer saber mais sobre STRYDE? Entre em contato conosco.
          </p>
          <div className={styles.divider}></div>
        </div>

        <div className={styles.formWrapper}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.row}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>
                  NOME COMPLETO
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder="Seu nome"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.formGroup}>
                <label htmlFor="phone" className={styles.label}>
                  TELEFONE
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="(00) 00000-0000"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject" className={styles.label}>
                  ASSUNTO
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={styles.select}
                >
                  <option value="">Selecione um assunto</option>
                  <option value="duvida_produto">Dúvida sobre Produto</option>
                  <option value="pedido">Informações de Pedido</option>
                  <option value="devolucao">Devolução/Troca</option>
                  <option value="parcerias">Parcerias</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>
                MENSAGEM
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className={styles.textarea}
                placeholder="Sua mensagem aqui..."
                rows={6}
              ></textarea>
            </div>

            <div className={styles.checkboxGroup}>
              <input
                type="checkbox"
                id="terms"
                required
                className={styles.checkbox}
              />
              <label htmlFor="terms" className={styles.checkboxLabel}>
                Concordo em receber emails de STRYDE com ofertas e novidades
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`${styles.submitButton} ${
                isSubmitting ? styles.submitting : ''
              }`}
            >
              {isSubmitting ? (
                <>
                  <span className={styles.loader}></span>
                  ENVIANDO...
                </>
              ) : (
                'ENVIAR MENSAGEM'
              )}
            </button>

            {submitStatus === 'success' && (
              <div className={styles.successMessage}>
                ✓ Mensagem enviada com sucesso! Responderemos em breve.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className={styles.errorMessage}>
                ✗ Erro ao enviar mensagem. Tente novamente.
              </div>
            )}
          </form>

          <div className={styles.info}>
            <div className={styles.infoBlock}>
              <div className={styles.infoIcon}>📧</div>
              <h3>EMAIL</h3>
              <p>contato@stryde.com</p>
            </div>

            <div className={styles.infoBlock}>
              <div className={styles.infoIcon}>📱</div>
              <h3>TELEFONE</h3>
              <p>+55 (11) 99999-9999</p>
            </div>

            <div className={styles.infoBlock}>
              <div className={styles.infoIcon}>📍</div>
              <h3>ENDEREÇO</h3>
              <p>São Paulo, SP - Brasil</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
