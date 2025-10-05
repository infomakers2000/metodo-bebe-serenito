"use client"

import { useState, useEffect, useRef } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Checkbox } from '@/components/ui/checkbox'
import { Slider } from '@/components/ui/slider'
import { 
  Sun, 
  Utensils, 
  Heart, 
  Baby, 
  Eye, 
  Lightbulb, 
  Bath, 
  Hand, 
  Moon, 
  Bed,
  Play,
  Volume2,
  VolumeX,
  RotateCcw,
  CheckCircle2,
  Clock,
  Target,
  Sparkles,
  Pause,
  ChevronLeft,
  ChevronRight,
  Repeat
} from 'lucide-react'

interface Block {
  id: string
  title: string
  description: string
  icon: any
  completed: boolean
}

interface TimeSection {
  id: string
  name: string
  blocks: Block[]
}

interface Day {
  id: number
  title: string
  subtitle: string
  sections: TimeSection[]
}

const methodData: Day[] = [
  {
    id: 1,
    title: "Día 1",
    subtitle: "Adaptación Suave",
    sections: [
      {
        id: "morning",
        name: "Mañana",
        blocks: [
          {
            id: "d1-m-1",
            title: "Luz Natural",
            description: "Al despertar, lleva al bebé a un ambiente con luz natural (sin sol directo). La claridad ayuda a regular el ciclo circadiano y enseña al cuerpo a diferenciar el día de la noche.",
            icon: Sun,
            completed: false
          },
          {
            id: "d1-m-2",
            title: "Alimentación",
            description: "0–6 meses: leche materna o fórmula a libre demanda. 7–12 meses: leche + fruta triturada o papilla ligera (banana, pera, avena). +1 año: desayuno completo (carbohidrato + fruta + proteína suave). Evita que el bebé se duerma mamando, para no reforzar la asociación 'pecho = dormir'.",
            icon: Utensils,
            completed: false
          },
          {
            id: "d1-m-3",
            title: "Interacción Suave",
            description: "Habla con suavidad, sonríe, canta canciones lentas, haz caricias suaves. Estas interacciones fortalecen el vínculo y estimulan sin cansar al bebé.",
            icon: Heart,
            completed: false
          },
          {
            id: "d1-m-4",
            title: "Juego Calmo",
            description: "Realiza tummy time corto (2–5 min), muestra juguetes coloridos lentamente, lee libros simples o canta canciones suaves. Después de 30–90 minutos despierto, ofrece la siesta.",
            icon: Baby,
            completed: false
          }
        ]
      },
      {
        id: "afternoon",
        name: "Tarde",
        blocks: [
          {
            id: "d1-a-1",
            title: "Evitar la Sobreestimulación",
            description: "Ocurre cuando hay demasiados estímulos (ruidos, pantallas, movimiento, luces fuertes). Señales: el bebé se frota los ojos, gira la cabeza, bosteza o llora sin motivo. Evita pantallas, música alta y juegos agitados 2 horas antes del sueño.",
            icon: Eye,
            completed: false
          },
          {
            id: "d1-a-2",
            title: "Preparar el Ambiente",
            description: "Disminuye las luces 1–2 horas antes del sueño nocturno. Evita luz blanca o azul y prefiere luz roja, ámbar o amarilla tenue. Usa lámparas bajas o de esquina. Si puedes leer cómodamente, la luz está demasiado fuerte para el bebé.",
            icon: Lightbulb,
            completed: false
          }
        ]
      },
      {
        id: "night",
        name: "Noche",
        blocks: [
          {
            id: "d1-n-1",
            title: "Baño y Transición",
            description: "Baño tibio y tranquilo, con voz baja y ambiente silencioso. Aprovecha para hablar con calma y transmitir seguridad.",
            icon: Bath,
            completed: false
          },
          {
            id: "d1-n-2",
            title: "Masaje Suave",
            description: "Usa aceite vegetal puro (girasol, almendras dulces, coco fraccionado). Haz movimientos de ordeñe en brazos y piernas, círculos en el abdomen y caricias suaves en la espalda. Duración: 5–10 minutos.",
            icon: Hand,
            completed: false
          },
          {
            id: "d1-n-3",
            title: "Alimentación Nocturna",
            description: "0–6 meses: leche completa antes del sueño. 7–12 meses: cena ligera (papilla o fruta) + leche 30–60 min antes. +1 año: cena ligera + leche antes de oscurecer el cuarto. El bebé debe dormir saciado, pero no mamando.",
            icon: Utensils,
            completed: false
          },
          {
            id: "d1-n-4",
            title: "Ambiente de Sueño",
            description: "Luz roja tenue, temperatura entre 20–22°C, ruido blanco suave y continuo. Coloca al bebé somnoliento pero despierto en la cuna. Si llora, utiliza voz calmada y contacto suave sin sacarlo inmediatamente.",
            icon: Moon,
            completed: false
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Día 2",
    subtitle: "Refuerzo y Consistencia",
    sections: [
      {
        id: "morning",
        name: "Mañana",
        blocks: [
          {
            id: "d2-m-1",
            title: "Luz Natural",
            description: "Repite la exposición a la luz natural y mantén horarios estables. Ayuda a fijar el ciclo de sueño del bebé.",
            icon: Sun,
            completed: false
          },
          {
            id: "d2-m-2",
            title: "Alimentación",
            description: "Sigue la secuencia alimentación → interacción → siesta. Evita siestas demasiado largas o cerca del mediodía.",
            icon: Utensils,
            completed: false
          }
        ]
      },
      {
        id: "afternoon",
        name: "Tarde",
        blocks: [
          {
            id: "d2-a-1",
            title: "Juegos Tranquilos",
            description: "Tapete con cubos blandos, juguetes lentos y sin sonidos fuertes. Evita pantallas o juegos agitados. La última siesta debe terminar al menos 2–3 horas antes del sueño nocturno.",
            icon: Play,
            completed: false
          },
          {
            id: "d2-a-2",
            title: "Reducir Luces",
            description: "Apaga pantallas y disminuye la intensidad de la iluminación gradualmente. Crea un ambiente cálido y acogedor antes de dormir.",
            icon: Lightbulb,
            completed: false
          }
        ]
      },
      {
        id: "night",
        name: "Noche",
        blocks: [
          {
            id: "d2-n-1",
            title: "Ritual de Sueño",
            description: "Baño, masaje, alimentación, historia o canción de cuna. Repite el mismo orden todos los días para reforzar el patrón de sueño.",
            icon: Bed,
            completed: false
          },
          {
            id: "d2-n-2",
            title: "Ambiente Oscuro",
            description: "Usa blackout total, ruido blanco constante y evita hablar o encender luces durante despertares nocturnos. Mantén el ambiente predecible y tranquilo.",
            icon: Moon,
            completed: false
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Día 3",
    subtitle: "Consolidación y Autonomía",
    sections: [
      {
        id: "morning",
        name: "Mañana",
        blocks: [
          {
            id: "d3-m-1",
            title: "Luz Natural",
            description: "Al despertar, expón al bebé a luz natural suave. Mantén los patrones alimenticios y de interacción del día anterior.",
            icon: Sun,
            completed: false
          },
          {
            id: "d3-m-2",
            title: "Observación de Señales",
            description: "Observa signos de sueño (bostezos, mirada perdida, frotarse los ojos). Ajusta las ventanas de descanso según el comportamiento del bebé.",
            icon: Eye,
            completed: false
          }
        ]
      },
      {
        id: "afternoon",
        name: "Tarde",
        blocks: [
          {
            id: "d3-a-1",
            title: "Rutina Predecible",
            description: "Mantén horarios fijos para siestas y alimentación. Evita retrasar el descanso y asegúrate de que la última siesta termine antes de las 17h.",
            icon: Clock,
            completed: false
          }
        ]
      },
      {
        id: "night",
        name: "Noche",
        blocks: [
          {
            id: "d3-n-1",
            title: "Ritual Final",
            description: "Masaje corto, historia tranquila y ruido blanco constante. Usa voz baja y movimientos lentos. Reduce gradualmente el contacto físico para fomentar autonomía.",
            icon: Bed,
            completed: false
          },
          {
            id: "d3-n-2",
            title: "Objetivo Final",
            description: "El bebé debe lograr dormirse y volver a dormirse solo durante los despertares nocturnos. El método busca independencia sin lágrimas y con acompañamiento emocional.",
            icon: Target,
            completed: false
          }
        ]
      }
    ]
  }
]

// Sonidos con configuración mejorada
const sounds = [
  { 
    id: 'white-noise', 
    name: 'Ruido Blanco', 
    description: 'Sonido constante que bloquea ruidos externos',
    duration: 300, // 5 minutos
    frequency: '20Hz-20kHz'
  },
  { 
    id: 'rain', 
    name: 'Lluvia Suave', 
    description: 'Sonido relajante de lluvia ligera',
    duration: 480, // 8 minutos
    frequency: 'Natural'
  },
  { 
    id: 'lullaby', 
    name: 'Canción de Cuna', 
    description: 'Melodía suave instrumental',
    duration: 180, // 3 minutos
    frequency: 'Melódica'
  },
  { 
    id: 'ocean', 
    name: 'Olas del Océano', 
    description: 'Sonido rítmico de olas suaves',
    duration: 600, // 10 minutos
    frequency: 'Natural'
  },
  { 
    id: 'heartbeat', 
    name: 'Latido Cardíaco', 
    description: 'Simula el latido materno',
    duration: 240, // 4 minutos
    frequency: '60-80 BPM'
  },
  { 
    id: 'forest', 
    name: 'Bosque Tranquilo', 
    description: 'Sonidos suaves de la naturaleza',
    duration: 420, // 7 minutos
    frequency: 'Natural'
  }
]

export default function BabySerenityMethod() {
  const [currentDay, setCurrentDay] = useState(1)
  const [completedBlocks, setCompletedBlocks] = useState<Set<string>>(new Set())
  const [nightMode, setNightMode] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentSound, setCurrentSound] = useState<string | null>(null)
  const [volume, setVolume] = useState([50])
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isLooping, setIsLooping] = useState(false)
  const audioContextRef = useRef<AudioContext | null>(null)
  const sourceNodeRef = useRef<AudioBufferSourceNode | null>(null)
  const gainNodeRef = useRef<GainNode | null>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Calcular progreso total
  const totalBlocks = methodData.reduce((total, day) => 
    total + day.sections.reduce((sectionTotal, section) => 
      sectionTotal + section.blocks.length, 0), 0)
  
  const completedCount = completedBlocks.size
  const progressPercentage = (completedCount / totalBlocks) * 100

  // Calcular progreso del día actual
  const currentDayData = methodData.find(day => day.id === currentDay)
  const currentDayBlocks = currentDayData?.sections.reduce((total, section) => 
    total + section.blocks.length, 0) || 0
  const currentDayCompleted = currentDayData?.sections.reduce((total, section) => 
    total + section.blocks.filter(block => completedBlocks.has(block.id)).length, 0) || 0
  const currentDayProgress = currentDayBlocks > 0 ? (currentDayCompleted / currentDayBlocks) * 100 : 0

  const toggleBlockCompletion = (blockId: string) => {
    const newCompleted = new Set(completedBlocks)
    if (newCompleted.has(blockId)) {
      newCompleted.delete(blockId)
    } else {
      newCompleted.add(blockId)
    }
    setCompletedBlocks(newCompleted)
  }

  // Función para generar audio sintético usando Web Audio API
  const generateSyntheticAudio = (type: string): AudioBuffer | null => {
    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)()
      }
      
      const audioContext = audioContextRef.current
      const sampleRate = audioContext.sampleRate
      const duration = 10 // 10 segundos de audio
      const buffer = audioContext.createBuffer(1, sampleRate * duration, sampleRate)
      const data = buffer.getChannelData(0)

      switch (type) {
        case 'white-noise':
          // Ruido blanco
          for (let i = 0; i < data.length; i++) {
            data[i] = (Math.random() * 2 - 1) * 0.1
          }
          break
        case 'rain':
          // Simulación de lluvia con ruido filtrado
          for (let i = 0; i < data.length; i++) {
            data[i] = (Math.random() * 2 - 1) * 0.05 * Math.sin(i * 0.001)
          }
          break
        case 'ocean':
          // Simulación de olas con ondas sinusoidales
          for (let i = 0; i < data.length; i++) {
            data[i] = Math.sin(i * 0.01) * 0.1 + (Math.random() * 2 - 1) * 0.02
          }
          break
        case 'heartbeat':
          // Simulación de latido cardíaco
          const bpm = 70
          const beatInterval = sampleRate * 60 / bpm
          for (let i = 0; i < data.length; i++) {
            const beatPhase = (i % beatInterval) / beatInterval
            if (beatPhase < 0.1) {
              data[i] = Math.sin(beatPhase * Math.PI * 20) * 0.3
            } else {
              data[i] = 0
            }
          }
          break
        case 'lullaby':
          // Melodía simple de canción de cuna
          const notes = [261.63, 293.66, 329.63, 349.23, 392.00, 440.00, 493.88] // Do, Re, Mi, Fa, Sol, La, Si
          for (let i = 0; i < data.length; i++) {
            const noteIndex = Math.floor((i / sampleRate) * 2) % notes.length
            data[i] = Math.sin(2 * Math.PI * notes[noteIndex] * i / sampleRate) * 0.1
          }
          break
        case 'forest':
          // Sonidos de bosque con múltiples frecuencias
          for (let i = 0; i < data.length; i++) {
            data[i] = (Math.sin(i * 0.005) + Math.sin(i * 0.003) + Math.sin(i * 0.007)) * 0.03 + (Math.random() * 2 - 1) * 0.01
          }
          break
        default:
          return null
      }

      return buffer
    } catch (error) {
      console.error('Error generando audio sintético:', error)
      return null
    }
  }

  const playSound = async (soundId: string) => {
    try {
      if (currentSound === soundId && isPlaying) {
        // Pausar
        if (sourceNodeRef.current) {
          sourceNodeRef.current.stop()
          sourceNodeRef.current = null
        }
        setIsPlaying(false)
        if (intervalRef.current) {
          clearInterval(intervalRef.current)
        }
        return
      }

      // Detener sonido actual si hay uno
      if (sourceNodeRef.current) {
        sourceNodeRef.current.stop()
        sourceNodeRef.current = null
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }

      const sound = sounds.find(s => s.id === soundId)
      if (!sound) return

      setCurrentSound(soundId)
      setIsPlaying(true)
      setCurrentTime(0)

      // Crear contexto de audio si no existe
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)()
      }

      // Reanudar contexto si está suspendido
      if (audioContextRef.current.state === 'suspended') {
        await audioContextRef.current.resume()
      }

      const buffer = generateSyntheticAudio(soundId)
      
      if (buffer && audioContextRef.current) {
        const source = audioContextRef.current.createBufferSource()
        const gainNode = audioContextRef.current.createGain()
        
        source.buffer = buffer
        source.loop = true
        gainNode.gain.value = volume[0] / 100
        
        source.connect(gainNode)
        gainNode.connect(audioContextRef.current.destination)
        
        sourceNodeRef.current = source
        gainNodeRef.current = gainNode
        
        source.start()
        setDuration(sound.duration)

        // Actualizar tiempo de reproducción
        intervalRef.current = setInterval(() => {
          setCurrentTime(prev => {
            const newTime = prev + 1
            if (newTime >= sound.duration && !isLooping) {
              setIsPlaying(false)
              setCurrentSound(null)
              if (sourceNodeRef.current) {
                sourceNodeRef.current.stop()
                sourceNodeRef.current = null
              }
              if (intervalRef.current) {
                clearInterval(intervalRef.current)
              }
              return 0
            }
            return isLooping ? newTime % sound.duration : newTime
          })
        }, 1000)

      } else {
        throw new Error('No se pudo generar el audio')
      }

    } catch (error) {
      console.error('Error reproduciendo sonido:', error)
      alert('No se pudo reproducir el sonido. Asegúrate de que tu navegador permita la reproducción de audio.')
      setIsPlaying(false)
      setCurrentSound(null)
    }
  }

  const stopSound = () => {
    if (sourceNodeRef.current) {
      sourceNodeRef.current.stop()
      sourceNodeRef.current = null
    }
    setIsPlaying(false)
    setCurrentSound(null)
    setCurrentTime(0)
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
  }

  const nextDay = () => {
    if (currentDay < 3) {
      setCurrentDay(currentDay + 1)
    }
  }

  const prevDay = () => {
    if (currentDay > 1) {
      setCurrentDay(currentDay - 1)
    }
  }

  const resetProgress = () => {
    setCompletedBlocks(new Set())
    setCurrentDay(1)
    stopSound()
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  // Actualizar volumen cuando cambie
  useEffect(() => {
    if (gainNodeRef.current) {
      gainNodeRef.current.gain.value = volume[0] / 100
    }
  }, [volume])

  useEffect(() => {
    // Aplicar modo nocturno
    if (nightMode) {
      document.documentElement.style.filter = 'hue-rotate(15deg) saturate(0.8)'
    } else {
      document.documentElement.style.filter = 'none'
    }
  }, [nightMode])

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
      if (sourceNodeRef.current) {
        sourceNodeRef.current.stop()
      }
      if (audioContextRef.current) {
        audioContextRef.current.close()
      }
    }
  }, [])

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      nightMode 
        ? 'bg-gradient-to-br from-red-950 via-orange-950 to-amber-950' 
        : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'
    }`}>
      <div className="container mx-auto px-4 py-6 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
              <Baby className="w-8 h-8 text-white" />
            </div>
            <h1 className={`text-3xl md:text-4xl font-bold ${
              nightMode ? 'text-amber-100' : 'text-gray-800'
            }`}>
              Método Bebé Serenito
            </h1>
          </div>
          <p className={`text-lg ${
            nightMode ? 'text-amber-200' : 'text-gray-600'
          }`}>
            Guía para enseñar a tu bebé a dormir mejor en 3 días
          </p>
        </div>

        {/* Controles superiores */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2">
            <Button
              variant={nightMode ? "secondary" : "outline"}
              size="sm"
              onClick={() => setNightMode(!nightMode)}
              className="flex items-center gap-2"
            >
              <Moon className="w-4 h-4" />
              {nightMode ? 'Modo Día' : 'Modo Noche'}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={resetProgress}
              className="flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              Reiniciar
            </Button>
          </div>
          
          <Badge variant="secondary" className="text-sm">
            <Sparkles className="w-4 h-4 mr-1" />
            {completedCount}/{totalBlocks} completados
          </Badge>
        </div>

        {/* Progreso general */}
        <Card className={`mb-6 ${nightMode ? 'bg-amber-900/20 border-amber-700' : ''}`}>
          <CardHeader>
            <CardTitle className={`flex items-center gap-2 ${
              nightMode ? 'text-amber-100' : ''
            }`}>
              <CheckCircle2 className="w-5 h-5" />
              Progreso General
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={progressPercentage} className="mb-2" />
            <p className={`text-sm ${nightMode ? 'text-amber-200' : 'text-gray-600'}`}>
              {progressPercentage.toFixed(0)}% completado - ¡Sigue así!
            </p>
          </CardContent>
        </Card>

        {/* Reproductor de sonidos mejorado */}
        <Card className={`mb-6 ${nightMode ? 'bg-amber-900/20 border-amber-700' : ''}`}>
          <CardHeader>
            <CardTitle className={`flex items-center gap-2 ${
              nightMode ? 'text-amber-100' : ''
            }`}>
              <Volume2 className="w-5 h-5" />
              Sonidos Relajantes
            </CardTitle>
            <p className={`text-sm mt-1 ${nightMode ? 'text-amber-200' : 'text-gray-600'}`}>
              Toca cualquier sonido para reproducir audio sintético relajante
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Grid de sonidos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {sounds.map((sound) => (
                <div
                  key={sound.id}
                  className={`p-3 rounded-lg border transition-all duration-200 cursor-pointer ${
                    currentSound === sound.id && isPlaying
                      ? nightMode
                        ? 'bg-amber-800/30 border-amber-600'
                        : 'bg-blue-50 border-blue-300'
                      : nightMode
                        ? 'bg-amber-900/10 border-amber-700/30 hover:bg-amber-800/20'
                        : 'bg-white border-gray-200 hover:bg-gray-50'
                  }`}
                  onClick={() => playSound(sound.id)}
                >
                  <div className="flex items-center gap-2 mb-2">
                    {currentSound === sound.id && isPlaying ? (
                      <Pause className="w-4 h-4 text-blue-500" />
                    ) : (
                      <Play className="w-4 h-4 text-green-500" />
                    )}
                    <span className={`font-medium text-sm ${
                      nightMode ? 'text-amber-100' : 'text-gray-800'
                    }`}>
                      {sound.name}
                    </span>
                  </div>
                  <p className={`text-xs leading-relaxed ${
                    nightMode ? 'text-amber-200' : 'text-gray-600'
                  }`}>
                    {sound.description}
                  </p>
                  <div className="flex justify-between items-center mt-2">
                    <span className={`text-xs ${
                      nightMode ? 'text-amber-300' : 'text-gray-500'
                    }`}>
                      {formatTime(sound.duration)}
                    </span>
                    <span className={`text-xs ${
                      nightMode ? 'text-amber-300' : 'text-gray-500'
                    }`}>
                      {sound.frequency}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Controles de reproducción */}
            {currentSound && (
              <div className={`p-4 rounded-lg border ${
                nightMode ? 'bg-amber-800/20 border-amber-700' : 'bg-gray-50 border-gray-200'
              }`}>
                <div className="flex items-center justify-between mb-3">
                  <span className={`font-medium ${
                    nightMode ? 'text-amber-100' : 'text-gray-800'
                  }`}>
                    {sounds.find(s => s.id === currentSound)?.name}
                  </span>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => playSound(currentSound)}
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsLooping(!isLooping)}
                      className={`${isLooping ? 'text-blue-500 bg-blue-50' : ''}`}
                      title={isLooping ? 'Desactivar repetición' : 'Activar repetición continua'}
                    >
                      <Repeat className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={stopSound}
                    >
                      <VolumeX className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                {/* Indicador de loop */}
                {isLooping && (
                  <div className={`text-xs mb-2 flex items-center gap-1 ${
                    nightMode ? 'text-blue-300' : 'text-blue-600'
                  }`}>
                    <Repeat className="w-3 h-3" />
                    Repetición continua activada
                  </div>
                )}
                
                {/* Barra de progreso del sonido */}
                <div className="space-y-2">
                  <Progress 
                    value={duration > 0 ? (currentTime / duration) * 100 : 0} 
                    className="h-2"
                  />
                  <div className="flex justify-between text-xs">
                    <span className={nightMode ? 'text-amber-200' : 'text-gray-600'}>
                      {formatTime(currentTime)}
                    </span>
                    <span className={nightMode ? 'text-amber-200' : 'text-gray-600'}>
                      {isLooping ? '∞' : formatTime(duration)}
                    </span>
                  </div>
                </div>

                {/* Control de volumen */}
                <div className="flex items-center gap-3 mt-3">
                  <VolumeX className="w-4 h-4 text-gray-400" />
                  <Slider
                    value={volume}
                    onValueChange={setVolume}
                    max={100}
                    step={1}
                    className="flex-1"
                  />
                  <Volume2 className="w-4 h-4 text-gray-400" />
                  <span className={`text-sm min-w-[3rem] ${
                    nightMode ? 'text-amber-200' : 'text-gray-600'
                  }`}>
                    {volume[0]}%
                  </span>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Navegación de días mejorada para mobile */}
        <Card className={`mb-6 ${nightMode ? 'bg-amber-900/20 border-amber-700' : ''}`}>
          <CardContent className="p-4">
            {/* Navegación con flechas para mobile */}
            <div className="flex items-center justify-between mb-4 md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={prevDay}
                disabled={currentDay === 1}
                className="flex items-center gap-1"
              >
                <ChevronLeft className="w-4 h-4" />
                Anterior
              </Button>
              
              <div className="text-center">
                <h3 className={`font-bold text-lg ${
                  nightMode ? 'text-amber-100' : 'text-gray-800'
                }`}>
                  {currentDayData?.title}
                </h3>
                <p className={`text-sm ${
                  nightMode ? 'text-amber-200' : 'text-gray-600'
                }`}>
                  {currentDayData?.subtitle}
                </p>
              </div>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={nextDay}
                disabled={currentDay === 3}
                className="flex items-center gap-1"
              >
                Siguiente
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Indicadores de progreso por día */}
            <div className="flex justify-center gap-2 mb-4">
              {methodData.map((day) => {
                const dayBlocks = day.sections.reduce((total, section) => 
                  total + section.blocks.length, 0)
                const dayCompleted = day.sections.reduce((total, section) => 
                  total + section.blocks.filter(block => completedBlocks.has(block.id)).length, 0)
                const dayProgress = dayBlocks > 0 ? (dayCompleted / dayBlocks) * 100 : 0
                
                return (
                  <div
                    key={day.id}
                    className={`flex-1 max-w-[120px] p-3 rounded-lg border cursor-pointer transition-all ${
                      currentDay === day.id
                        ? nightMode
                          ? 'bg-amber-800/30 border-amber-600'
                          : 'bg-blue-50 border-blue-300'
                        : nightMode
                          ? 'bg-amber-900/10 border-amber-700/30'
                          : 'bg-white border-gray-200'
                    }`}
                    onClick={() => setCurrentDay(day.id)}
                  >
                    <div className="text-center">
                      <h4 className={`font-semibold text-sm mb-1 ${
                        nightMode ? 'text-amber-100' : 'text-gray-800'
                      }`}>
                        {day.title}
                      </h4>
                      <p className={`text-xs mb-2 ${
                        nightMode ? 'text-amber-200' : 'text-gray-600'
                      }`}>
                        {day.subtitle}
                      </p>
                      <Progress value={dayProgress} className="h-1 mb-1" />
                      <span className={`text-xs ${
                        nightMode ? 'text-amber-300' : 'text-gray-500'
                      }`}>
                        {dayCompleted}/{dayBlocks}
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Tabs para desktop */}
            <div className="hidden md:block">
              <Tabs value={currentDay.toString()} onValueChange={(value) => setCurrentDay(parseInt(value))}>
                <TabsList className="grid w-full grid-cols-3">
                  {methodData.map((day) => (
                    <TabsTrigger key={day.id} value={day.id.toString()} className="flex flex-col gap-1">
                      <span className="font-semibold">{day.title}</span>
                      <span className="text-xs opacity-70">{day.subtitle}</span>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>
          </CardContent>
        </Card>

        {/* Contenido del día actual */}
        {currentDayData && (
          <div>
            {/* Progreso del día actual */}
            <Card className={`mb-6 ${nightMode ? 'bg-amber-900/20 border-amber-700' : ''}`}>
              <CardHeader>
                <CardTitle className={`${nightMode ? 'text-amber-100' : ''}`}>
                  {currentDayData.title} - {currentDayData.subtitle}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Progress value={currentDayProgress} className="mb-2" />
                <p className={`text-sm ${nightMode ? 'text-amber-200' : 'text-gray-600'}`}>
                  {currentDayCompleted}/{currentDayBlocks} actividades completadas hoy
                </p>
              </CardContent>
            </Card>

            {/* Secciones del día */}
            <div className="space-y-6">
              {currentDayData.sections.map((section) => (
                <Card key={section.id} className={`${nightMode ? 'bg-amber-900/20 border-amber-700' : ''}`}>
                  <CardHeader>
                    <CardTitle className={`flex items-center gap-2 ${
                      nightMode ? 'text-amber-100' : ''
                    }`}>
                      {section.id === 'morning' && <Sun className="w-5 h-5 text-yellow-500" />}
                      {section.id === 'afternoon' && <Lightbulb className="w-5 h-5 text-orange-500" />}
                      {section.id === 'night' && <Moon className="w-5 h-5 text-blue-500" />}
                      {section.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {section.blocks.map((block) => {
                        const IconComponent = block.icon
                        const isCompleted = completedBlocks.has(block.id)
                        
                        return (
                          <div
                            key={block.id}
                            className={`p-4 rounded-lg border transition-all duration-200 ${
                              isCompleted 
                                ? nightMode 
                                  ? 'bg-green-900/30 border-green-700' 
                                  : 'bg-green-50 border-green-200'
                                : nightMode
                                  ? 'bg-amber-800/10 border-amber-600/30'
                                  : 'bg-white border-gray-200'
                            }`}
                          >
                            <div className="flex items-start gap-3">
                              <div className={`p-2 rounded-full ${
                                isCompleted 
                                  ? 'bg-green-500' 
                                  : 'bg-gradient-to-r from-purple-400 to-pink-400'
                              }`}>
                                <IconComponent className="w-5 h-5 text-white" />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center justify-between mb-2">
                                  <h4 className={`font-semibold ${
                                    nightMode ? 'text-amber-100' : 'text-gray-800'
                                  }`}>
                                    {block.title}
                                  </h4>
                                  <Checkbox
                                    checked={isCompleted}
                                    onCheckedChange={() => toggleBlockCompletion(block.id)}
                                  />
                                </div>
                                <p className={`text-sm leading-relaxed ${
                                  nightMode ? 'text-amber-200' : 'text-gray-600'
                                }`}>
                                  {block.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
        <div className={`text-center mt-8 p-4 rounded-lg ${
          nightMode ? 'bg-amber-900/20' : 'bg-white/50'
        }`}>
          <p className={`text-sm ${nightMode ? 'text-amber-200' : 'text-gray-600'}`}>
            💤 Recuerda: cada bebé es único. Adapta el método según las necesidades de tu pequeño.
          </p>
          <p className={`text-xs mt-2 ${nightMode ? 'text-amber-300' : 'text-gray-500'}`}>
            Método Bebé Serenito - Sueño tranquilo para toda la familia
          </p>
        </div>
      </div>
    </div>
  )
}