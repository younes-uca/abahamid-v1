package  com.ird.faa.ws.rest.provided.facade.etudiant;

import com.ird.faa.service.etudiant.facade.TypeImageEtudiantService;

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
import com.ird.faa.bean.TypeImage;
import com.ird.faa.ws.rest.provided.converter.TypeImageConverter;
import com.ird.faa.ws.rest.provided.vo.TypeImageVo;

@Api("Manages typeImage services")
@RestController
@RequestMapping("api/etudiant/typeImage")
public class TypeImageRestEtudiant {

@Autowired
private TypeImageEtudiantService typeImageService;

@Autowired
private TypeImageConverter typeImageConverter;


            @ApiOperation("Updates the specified  typeImage")
            @PutMapping("/")
            public  TypeImageVo update(@RequestBody  TypeImageVo  typeImageVo){
            TypeImage typeImage = typeImageConverter.toItem(typeImageVo);
            typeImage = typeImageService.update(typeImage);
            return typeImageConverter.toVo(typeImage);
            }

    @ApiOperation("Finds a list of all typeImages")
    @GetMapping("/")
    public List<TypeImageVo> findAll(){
        return typeImageConverter.toVo(typeImageService.findAll());
    }

    @ApiOperation("Finds a typeImage with associated lists by id")
    @GetMapping("/detail/id/{id}")
    public TypeImageVo findByIdWithAssociatedList(@PathVariable Long id){
    return typeImageConverter.toVo(typeImageService.findByIdWithAssociatedList(id));
    }

    @ApiOperation("Search typeImage by a specific criteria")
    @PostMapping("/search")
    public List<TypeImageVo> findByCriteria(@RequestBody TypeImageVo typeImageVo){
        return typeImageConverter.toVo(typeImageService.findByCriteria(typeImageVo));
        }

            @ApiOperation("Finds a typeImage by id")
            @GetMapping("/id/{id}")
            public TypeImageVo findById(@PathVariable Long id){
            return typeImageConverter.toVo(typeImageService.findById(id));
            }

            @ApiOperation("Saves the specified  typeImage")
            @PostMapping("/")
            public TypeImageVo save(@RequestBody TypeImageVo typeImageVo){
            TypeImage typeImage = typeImageConverter.toItem(typeImageVo);
            typeImage = typeImageService.save(typeImage);
            return typeImageConverter.toVo(typeImage);
            }

            @ApiOperation("Delete the specified typeImage")
            @DeleteMapping("/")
            public int delete(@RequestBody TypeImageVo typeImageVo){
            TypeImage typeImage = typeImageConverter.toItem(typeImageVo);
            return typeImageService.delete(typeImage);
            }

            @ApiOperation("Deletes a typeImage by id")
            @DeleteMapping("/id/{id}")
            public int deleteById(@PathVariable Long id){
            return typeImageService.deleteById(id);
            }


            }
