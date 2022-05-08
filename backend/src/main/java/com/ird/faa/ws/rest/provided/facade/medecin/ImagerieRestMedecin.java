package  com.ird.faa.ws.rest.provided.facade.medecin;

import com.ird.faa.service.medecin.facade.ImagerieMedecinService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import com.ird.faa.bean.Imagerie;
import com.ird.faa.ws.rest.provided.converter.ImagerieConverter;
import com.ird.faa.ws.rest.provided.vo.ImagerieVo;

@Api("Manages imagerie services")
@RestController
@RequestMapping("api/medecin/imagerie")
public class ImagerieRestMedecin {

@Autowired
private ImagerieMedecinService imagerieService;

@Autowired
private ImagerieConverter imagerieConverter;


            @ApiOperation("Updates the specified  imagerie")
            @PutMapping("/")
            public  ImagerieVo update(@RequestBody  ImagerieVo  imagerieVo){
            Imagerie imagerie = imagerieConverter.toItem(imagerieVo);
            imagerie = imagerieService.update(imagerie);
            return imagerieConverter.toVo(imagerie);
            }

    @ApiOperation("Finds a list of all imageries")
    @GetMapping("/")
    public List<ImagerieVo> findAll(){
        return imagerieConverter.toVo(imagerieService.findAll());
    }

    @ApiOperation("Finds a imagerie with associated lists by id")
    @GetMapping("/detail/id/{id}")
    public ImagerieVo findByIdWithAssociatedList(@PathVariable Long id){
    return imagerieConverter.toVo(imagerieService.findByIdWithAssociatedList(id));
    }

    @ApiOperation("Search imagerie by a specific criteria")
    @PostMapping("/search")
    public List<ImagerieVo> findByCriteria(@RequestBody ImagerieVo imagerieVo){
        return imagerieConverter.toVo(imagerieService.findByCriteria(imagerieVo));
        }

            @ApiOperation("Finds a imagerie by id")
            @GetMapping("/id/{id}")
            public ImagerieVo findById(@PathVariable Long id){
            return imagerieConverter.toVo(imagerieService.findById(id));
            }

            @ApiOperation("Saves the specified  imagerie")
            @PostMapping("/")
            public ImagerieVo save(@RequestBody ImagerieVo imagerieVo){
            Imagerie imagerie = imagerieConverter.toItem(imagerieVo);
            imagerie = imagerieService.save(imagerie);
            return imagerieConverter.toVo(imagerie);
            }

            @ApiOperation("Delete the specified imagerie")
            @DeleteMapping("/")
            public int delete(@RequestBody ImagerieVo imagerieVo){
            Imagerie imagerie = imagerieConverter.toItem(imagerieVo);
            return imagerieService.delete(imagerie);
            }

            @ApiOperation("Deletes a imagerie by id")
            @DeleteMapping("/id/{id}")
            public int deleteById(@PathVariable Long id){
            return imagerieService.deleteById(id);
            }
        @ApiOperation("find by typeImage code")
        @GetMapping("/typeImage/code/{code}")
        public List<Imagerie> findByTypeImageCode(@PathVariable String code){
        return imagerieService.findByTypeImageCode(code);
        }

        @ApiOperation("delete by typeImage code")
        @DeleteMapping("/typeImage/code/{code}")
        public int deleteByTypeImageCode(@PathVariable String code){
        return imagerieService.deleteByTypeImageCode(code);
        }

        @ApiOperation("find by typeImage id")
        @GetMapping("/typeImage/id/{id}")
        public List<Imagerie> findByTypeImageId(@PathVariable Long id){
        return imagerieService.findByTypeImageId(id);
        }

        @ApiOperation("delete by typeImage id")
        @DeleteMapping("/typeImage/id/{id}")
        public int deleteByTypeImageId(@PathVariable Long id){
        return imagerieService.deleteByTypeImageId(id);
        }

        @ApiOperation("find by phaseImage code")
        @GetMapping("/phaseImage/code/{code}")
        public List<Imagerie> findByPhaseImageCode(@PathVariable String code){
        return imagerieService.findByPhaseImageCode(code);
        }

        @ApiOperation("delete by phaseImage code")
        @DeleteMapping("/phaseImage/code/{code}")
        public int deleteByPhaseImageCode(@PathVariable String code){
        return imagerieService.deleteByPhaseImageCode(code);
        }

        @ApiOperation("find by phaseImage id")
        @GetMapping("/phaseImage/id/{id}")
        public List<Imagerie> findByPhaseImageId(@PathVariable Long id){
        return imagerieService.findByPhaseImageId(id);
        }

        @ApiOperation("delete by phaseImage id")
        @DeleteMapping("/phaseImage/id/{id}")
        public int deleteByPhaseImageId(@PathVariable Long id){
        return imagerieService.deleteByPhaseImageId(id);
        }

        @ApiOperation("find by dossierMedicale ref")
        @GetMapping("/dossierMedicale/ref/{ref}")
        public List<Imagerie> findByDossierMedicaleRef(@PathVariable String ref){
        return imagerieService.findByDossierMedicaleRef(ref);
        }

        @ApiOperation("delete by dossierMedicale ref")
        @DeleteMapping("/dossierMedicale/ref/{ref}")
        public int deleteByDossierMedicaleRef(@PathVariable String ref){
        return imagerieService.deleteByDossierMedicaleRef(ref);
        }

        @ApiOperation("find by dossierMedicale id")
        @GetMapping("/dossierMedicale/id/{id}")
        public List<Imagerie> findByDossierMedicaleId(@PathVariable Long id){
        return imagerieService.findByDossierMedicaleId(id);
        }

        @ApiOperation("delete by dossierMedicale id")
        @DeleteMapping("/dossierMedicale/id/{id}")
        public int deleteByDossierMedicaleId(@PathVariable Long id){
        return imagerieService.deleteByDossierMedicaleId(id);
        }



            }
